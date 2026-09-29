# -*- coding: utf-8 -*-
"""Sort de public/ tout visuel qui ne doit pas etre mis en ligne.

POURQUOI
Tout ce qui se trouve dans public/ est servi tel quel par le site, a une URL
publique, qu'une page le reference ou non. Avant la mise en ligne, public/
contenait trois choses qui n'avaient rien a y faire :

  - public/produits/      1,9 Go : les telechargements BRUTS, photos des
                          marchands concurrents avant tout tri ;
  - public/produits-obf/  les originaux Open Beauty Facts avant normalisation ;
  - public/produits-web/  environ la moitie des fichiers : les visuels REJETES
                          par le tri de provenance.

Le proprietaire a pose une regle nette : aucune photo prise aux marchands
algeriens. Les deployer, meme sans lien depuis une page, les aurait rendues
accessibles publiquement sous notre domaine.

OU ILS VONT
Hors du depot git, dans un dossier frere de l'application. C'est la seule
garantie qu'aucun `git add` ne pourra jamais les embarquer. Rien n'est
supprime : tout reste disponible pour le pipeline d'images.

QUE GARDE-T-ON DANS public/produits-web
Exactement les fichiers references par data/produits.json, et rien d'autre.

Usage :
  python pipeline/11-deploiement/isoler_images.py            # simulation
  python pipeline/11-deploiement/isoler_images.py --appliquer
"""
from __future__ import unicode_literals

import io
import json
import os
import sys

APP = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
PUBLIC = os.path.join(APP, "public")
HORS_LIGNE = os.path.abspath(os.path.join(APP, "..", "images-hors-ligne"))

APPLIQUER = "--appliquer" in sys.argv


def ecrire(ligne):
    sys.stdout.write(ligne + "\n")


def references():
    """Noms de fichiers de produits-web reellement utilises par le site."""
    donnees = json.load(io.open(os.path.join(APP, "data", "produits.json"), encoding="utf-8"))
    produits = donnees if isinstance(donnees, list) else donnees.get("produits", [])
    garder = set()
    for p in produits:
        for image in p.get("images") or []:
            if image.startswith("/produits-web/"):
                garder.add(image[len("/produits-web/"):])
    return garder


def deplacer_dossier(nom, destination):
    source = os.path.join(PUBLIC, nom)
    if not os.path.isdir(source):
        ecrire("  %-22s absent, rien a faire" % nom)
        return
    nb = sum(len(f) for _, _, f in os.walk(source))
    cible = os.path.join(HORS_LIGNE, destination)
    ecrire("  %-22s %6d fichiers -> %s" % (nom, nb, cible))
    if APPLIQUER:
        if os.path.exists(cible):
            raise SystemExit("ARRET : %s existe deja, deplacement refuse pour ne rien ecraser" % cible)
        # Meme disque : un renommage, instantane quel que soit le volume.
        os.rename(source, cible)


def main():
    ecrire("mode : %s" % ("APPLICATION" if APPLIQUER else "simulation (ajouter --appliquer)"))
    ecrire("hors ligne : %s\n" % HORS_LIGNE)

    if APPLIQUER and not os.path.isdir(HORS_LIGNE):
        os.makedirs(HORS_LIGNE)

    ecrire("Dossiers entiers :")
    deplacer_dossier("produits", "produits-bruts")
    deplacer_dossier("produits-obf", "produits-obf")

    ecrire("\nVisuels normalises (public/produits-web) :")
    garder = references()
    dossier = os.path.join(PUBLIC, "produits-web")
    presents = set(os.listdir(dossier)) if os.path.isdir(dossier) else set()
    a_ecarter = sorted(presents - garder)
    manquants = sorted(garder - presents)

    ecrire("  references par le site : %d" % len(garder))
    ecrire("  presents sur le disque  : %d" % len(presents))
    ecrire("  a ecarter               : %d" % len(a_ecarter))
    ecrire("  references MANQUANTS    : %d" % len(manquants))
    if manquants:
        ecrire("  ATTENTION, exemples : %s" % ", ".join(manquants[:5]))

    if APPLIQUER and a_ecarter:
        cible = os.path.join(HORS_LIGNE, "produits-web-ecartes")
        if not os.path.isdir(cible):
            os.makedirs(cible)
        for nom in a_ecarter:
            os.rename(os.path.join(dossier, nom), os.path.join(cible, nom))
        restant = len(os.listdir(dossier))
        ecrire("\n  deplaces : %d | restent dans produits-web : %d" % (len(a_ecarter), restant))
        if restant != len(garder) - len(manquants):
            ecrire("  ALERTE : le compte restant ne correspond pas aux references")
            sys.exit(1)


if __name__ == "__main__":
    main()

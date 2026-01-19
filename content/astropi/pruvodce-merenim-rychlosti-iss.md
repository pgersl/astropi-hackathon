---
title: "Průvodce měřením rychlosti ISS"
layout: astropi
mission: space-lab
---
K výpočtu využijeme programovací jazyk Python a metody počítačového vidění.

**Co budete potřebovat:**
- Software: Editor Thonny (dostupný pro Windows, macOS i Linux).
- Knihovny: Budete muset nainstalovat balíčky exif pro čtení metadat, opencv-python pro analýzu obrazu a standardní knihovny datetime a math.
- Data: Sadu testovacích fotografií z ISS.
# Krok 1: Zjištění časového rozdílu z dat EXIF
Každá fotografie pořízená na ISS obsahuje tzv. Exif data. Jedná se o skryté informace, které ukládají čas pořízení snímku, polohu nebo typ použitého fotoaparátu.
1. Získání času: Vytvoříte funkci get_time, která otevře soubor obrázku a extrahuje tag datetime_original.
2. Výpočet rozdílu: Funkce get_time_difference pak vezme dva obrázky, převede jejich časy na sekundy a vypočítá, kolik času uplynulo mezi jejich pořízením.

# Krok 2: Hledání podobných prvků pomocí OpenCV
Abychom zjistili, jak daleko se ISS pohnula, musíme v obou snímcích najít stejné objekty (např. mraky, hory nebo pobřeží). K tomu využijeme algoritmus ORB (Oriented FAST and Rotated BRIEF).

- Detekce klíčových bodů: Algoritmus najde v obraze významné body a přiřadí jim tzv. deskriptory – informace o jejich poloze, velikosti, jasu a rotaci.
- Párování (Brute Force): Program následně porovná deskriptory z prvního snímku se všemi deskriptory z druhého snímku a pokusí se najít shody.

# Krok 3: Vizualizace výsledků
Jakmile program nalezne shodné body v obou fotografiích, můžeme si výsledek nechat vykreslit.

Pomocí funkce cv2.drawMatches program vytvoří nový obrázek, kde jsou oba snímky vedle sebe a mezi odpovídajícími si body jsou vykresleny spojovací čáry. Pokud čáry směřují stejným směrem a jsou podobně dlouhé, algoritmus úspěšně identifikoval pohyb stanice nad zemským povrchem.

**Další postup**

Změřením vzdálenosti (v pixelech) mezi těmito shodnými body a jejím vydělením zjištěným časovým rozdílem získáte základ pro výpočet skutečné rychlosti ISS v kilometrech za hodinu nebo za sekundu.
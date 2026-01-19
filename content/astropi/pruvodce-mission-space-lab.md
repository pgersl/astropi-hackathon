---
title: "Průvodce Mission Space Lab"
layout: astropi
mission: space-lab
---
Hlavním úkolem pro aktuální ročník 2025/26 je vytvořit software, který dokáže během desetiminutového okna shromáždit vědecká data a s co nejvyšší přesností vypočítat rychlost, jakou se stanice pohybuje nad zemským povrchem.

# Od plánování k prvnímu řádku kódu
Prvním krokem k úspěšnému letu na ISS je důkladné naplánování experimentu. Programátoři musí vzít v úvahu, že jejich kód bude v kosmu pracovat zcela autonomně bez jakéhokoli zásahu astronautů. Základem každého projektu je soubor pojmenovaný main.py, který slouží jako vstupní bod celého programu. Pro psaní kódu je doporučeno prostředí Thonny, které je přehledné a plně kompatibilní se všemi potřebnými knihovnami. Jelikož na ISS platí přísná bezpečnostní pravidla, lze využívat pouze schválené moduly, jako je picamzero pro ovládání kamery, sense_hat pro sběr dat ze senzorů nebo astro_pi_orbit pro sledování polohy stanice.

# Simulace vesmírného prostředí na Zemi
Protože přístup k reálnému hardwaru na oběžné dráze je omezený, klíčovou roli ve vývoji hraje nástroj Astro Pi Replay Tool. Tento simulátor umožňuje týmům otestovat funkčnost jejich programu v podmínkách simulujících reálný provoz na ISS. Namísto živého přenosu z kamery podává simulátor kódu historické snímky a data z předchozích misí. To umožňuje tvůrcům ověřit, zda jejich algoritmy pro výpočet rychlosti fungují správně a zda se program dokáže vypořádat s různými světelnými podmínkami nebo oblačností pod ním.

# Optimalizace pro vědecký úspěch
Samotný výpočet rychlosti ISS vyžaduje kreativní přístup. Týmy se nejčastěji spoléhají na analýzu obrazu, kdy porovnávají časový posun mezi dvěma snímky a identifikují pohyb pevných bodů na zemi. Aby byly výsledky co nejpřesnější, doporučuje se pořizovat fotografie v plném rozlišení (4056 × 3040 px). Pokročilejší týmy mohou využít i strojové učení s využitím akcelerátoru Google Coral k rozpoznávání objektů na povrchu Země. Je však nutné dbát na limity: program nesmí během svého běhu uložit více než 42 snímků a celkový objem dat musí zůstat pod hranicí 250 MB.

# Cesta k získání statutu „Flight Status“
Než je kód nahrán na palubu rakety směřující k ISS, musí projít přísným testováním u řídicího centra Astro Pi Mission Control. Programátoři musí zajistit, aby jejich kód byl nejen funkční, ale také robustní a dobře zdokumentovaný. Jakákoli chyba, která by mohla způsobit pád systému nebo nadměrné vytížení paměti, by mohla vést k diskvalifikaci. Finální výstupem programu musí být textový soubor result.txt, obsahující pouze výsledný odhad rychlosti v kilometrech za sekundu zaokrouhlený na pět významných číslic.
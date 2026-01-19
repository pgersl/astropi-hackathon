---
title: "Průvodce pro mentory"
layout: astropi
mission: space-lab
---

Mise Space Lab nabízí mladým lidem výjimečnou příležitost provádět vědecké experimenty ve vesmíru prostřednictvím vlastního kódu v jazyce Python běžícího na počítačích Raspberry Pi na palubě Mezinárodní vesmírné stanice. Úlohou mentora v tomto procesu není být expertem na programování, ale spíše průvodcem, který týmu pomůže překonávat překážky a strukturovat jejich práci. Pro účast v projektu nejsou vyžadovány žádné předchozí zkušenosti s výzvami Astro Pi, protože organizátoři poskytují veškerou potřebnou technickou podporu a výukové materiály.



# Příprava a metodika práce
Účast v Mission Space Lab vyžaduje přibližně 5 až 10 hodin projektového času, který je nejvhodnější rozdělit do série neformálních setkání. Doporučuje se využívat proces „designového myšlení“, který týmy provede od počátečního návrhu až po finální odeslání kódu. Před zahájením práce je nezbytné zajistit, aby počítače měly nainstalovaný editor Thonny a potřebné knihovny, což týmu umožní pracovat efektivně i v offline režimu. Mentor by měl povzbuzovat studenty k výzkumnému přístupu a samostatnému hledání řešení online, kdykoliv narazí na programátorský problém.

# Technické cíle a požadavky na program
Hlavním úkolem týmu pro tento ročník je vytvořit program, který v reálném čase sbírá data ze senzorů nebo kamery a vypočítává aktuální rychlost pohybu ISS. Program musí běžet přesně 10 minut a následně se automaticky ukončit. Klíčovým výstupem je zápis vypočítané rychlosti v kilometrech za sekundu (km/s) do textového souboru. Tým může také ukládat omezené množství fotografií a dalších dat, která jim budou zaslána k analýze poté, co jejich experiment proběhne ve vesmíru. Pro dosažení nejlepších výsledků se doporučuje využívat historická data ze senzorů nebo sadu testovacích fotografií pro kalibraci algoritmů.

# Zajištění kvality a bezpečnosti
Při vývoji je nutné dbát na pravidla uvedená v oficiálním Rulebooku, který slouží jako závazná technická specifikace pro udělení „letového statusu“. Mentor musí dohlížet na to, aby kód neobsahoval nevhodný obsah, diskriminační jazyk nebo násilné prvky, což by vedlo k okamžitému vyřazení projektu. Důležitou součástí práce je také průběžné testování pomocí nástroje Astro Pi Replay Tool, který simuluje prostředí na ISS a pomáhá odhalit chyby v logice programu ještě před jeho odesláním. V případě nejasností mohou mentoři využít plánované webináře s odborníky z Astro Pi Mission Control nebo podporu na oficiálním e-mailu projektu.

# Fáze soutěže

## Fáze 1: Registrace a sestavení týmu
Prvním krokem mentora je registrace do systému, po které obdrží unikátní e-mailový odkaz pro správu svých týmů. Jeden mentor může zaregistrovat až 10 týmů, přičemž každý z nich musí tvořit 2 až 6 mladých lidí splňujících kritéria způsobilosti. Při zakládání týmu je nutné zvolit název o délce maximálně 8 znaků bez mezer a uvést základní údaje o členech, jako je věk a pohlaví. Důležitou součástí této fáze je také úvodní posouzení dovedností týmu, které slouží organizátorům k pozdějšímu hodnocení dopadu celého projektu.

## Fáze 2: Inspirace a první kroky
Jakmile jsou týmy registrovány, přichází fáze hledání inspirace a probouzení zvědavosti. Pro týmy, které se s výzvou setkávají poprvé, jsou připraveny prezentace a interaktivní nástroje, jako je prohlídka ISS pomocí Google Street View, kde mohou studenti hledat počítače Astro Pi přímo v modulu stanice. V této fázi se studenti seznamují se základními technologiemi prostřednictvím úvodních projektů zaměřených na práci s kamerovým modulem, senzory Sense HAT nebo analýzou historických dat z předchozích misí.

## Fáze 3: Metodika Design Thinking a vývoj
Jádrem projektu je proces návrhového myšlení (Design Thinking), který tým provede od empatie k uživateli až po finální testování.

Definice a nápady: Tým musí přesně definovat problémy, které řeší – například jak si program poradí s různými světelnými podmínkami během 10 minut letu. Během brainstormingu (Ideate) by měli studenti zvažovat různé typy dat a způsoby jejich sběru, i když se některé nápady ukáží jako nerealizovatelné.

Prototypování a testování: Před nasazením živého kódu je zásadní vytvořit algoritmus, který funguje na statických historických datech. Následně se program testuje v simulátoru Astro Pi Replay Tool, kde se ověřuje, zda kód běží celých 10 minut bez chyb a zda správně zapisuje výsledky podle pravidel.

Organizace práce: Mentor by měl týmu pomoci s vizualizací úloh pomocí vývojových diagramů (flowchartů) a s rozdělením rolí podle silných stránek jednotlivých členů. Důležité je také plánovat scénáře „co se stane, když“, aby program neselhal při neočekávaném vstupu ze senzorů.

## Fáze 4: Odevzdání a hodnocení
Závěrečnou fází je nahrání hotového programu, které probíhá přes unikátní odkaz získaný při registraci. Uzávěrka pro odevzdání projektů pro aktuální ročník je stanovena na 16. února 2026 ve 12:00 SEČ. Celé řešení musí být zabaleno v souboru formátu .zip a jeho základem musí být soubor s názvem main.py. Pro získání prestižního „letového statusu“ je klíčové, aby byl kód přehledně dokumentován pomocí komentářů a aby neobsahoval žádné pokusy o umělé ovlivňování výsledků, jako je odmítání hodnot, které neodpovídají očekávané rychlosti. Hodnotící komise při výběru zohledňuje kreativitu řešení i věk účastníků, takže i jednodušší programy mladších týmů mají šanci na úspěch.
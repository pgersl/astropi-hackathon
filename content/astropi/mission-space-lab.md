---
title: "Mission Space Lab"
layout: astropi
mission: space-lab
---
Mission Space Lab umožňuje mladým lidem provádět vědecké experimenty přímo na palubě Mezinárodní vesmírné stanice.

> Registrace projektů jsou otevřeny od 16. září 2024 do 24. února 2025.

# Vyřešte vědecký úkol ve vesmíru!

V Mission Space Lab jsou týmy vyzvány, aby napsaly počítačové programy, které vyřeší vědecký úkol ve vesmíru: shromáždit data pro co nejpřesnější výpočet rychlosti, kterou se Mezinárodní vesmírná stanice (ISS) pohybuje.

Pro dosažení tohoto cíle týmy napíší Python program, který nejprve využije senzory nebo kameru počítačů Astro Pi ke shromažďování dat o orientaci a pohybu ISS při jejím obíhání Země. Na základě těchto dat poté vypočítají rychlost ISS.

Účast v Astro Pi Mission Space Lab umožňuje mladým lidem dozvědět se více o ISS, o tom, jak shromažďovat a využívat data k zodpovězení vědecké otázky, a také o tom, jak vytvořit a vyladit počítačový program. Mají rovněž vzrušující příležitost učit se o vědě o pohybu a oběhu ISS. Oprávněné programy budou nasazeny na ISS a týmy obdrží certifikáty a data, která byla shromážděna ve vesmíru.

{{< figure src="https://images.ctfassets.net/yft5xyng9e7d/4WmelbL0k9VEdzaf3eHNH7/da55863b14ac6792f9bd17e1b42e20fe/iss-b67b2443a8643bd9e69eb9aac5e28e8c80eee08133af20c0180eaafe5ebe6e09c2ffe8f2fe978b4eb4dfab4bde64a9115055a8a21196dc02c748017b.jpg?h=900&w=1200" cap="Zdroj: ESA" >}}

# Počítače AstroPi

Astro Pi je počítač Raspberry Pi vybavený přídavnou deskou Sense HAT, kamerou s vysokým rozlišením, akcelerátorem strojového učení Coral a pevným pouzdrem speciálně navrženým pro vesmírné mise. Sense HAT obsahuje řadu senzorů, které týmy mohou využít k zachycení dat:

- Pasivní infračervený senzor (PIR)
- Senzor barvy a jasu
- Gyroskop, akcelerometr a magnetometr (senzor inerciální měřicí jednotky, IMU)
- Teplotní senzor
- Senzor vlhkosti
- Senzor tlaku

{{< figure src="https://images.ctfassets.net/yft5xyng9e7d/2fTEbPwnPzuUd7vMCTJl6D/bef6c269706e7f063af77f25721378dd/Astro_PI_IR_vis.jpg?h=674&w=1200" cap="Zdroj: ESA" >}}

{{< more-link link="/astropi/pocitace-astropi" text="Více o počítačích" >}}

# Plánování Mission Space Lab

Aby byli účastníci schopni zjistit rychlost ISS, je třeba, aby se seznámili s některými vědeckými koncepty a s ISS samotnou.

[Průvodce Mission Space Lab](/astropi/pruvodce-mission-space-lab) dává mladým lidem úvod do nejdůležitějších programátorských dovedností, aby mohli napsat své porgramy v Pythonu a získat data, která potřebují.

[Průvodce měřením rychlosti ISS](/astropi/pruvodce-merenim-rychlosti-iss) demonstruje, jak mohou týmy k letošnímu výzkumnému úkolu přistupovat pomocí fotografií pořízených kamerou AstroPi počítače. Aby byl jejich odhad co nejpřesnější, bude potřeba kód z tohoto průvodce ještě značně dopracovat.

[Průvodce pro mentory](/astropi/pruvodce-pro-mentory) dává mentorům vše, co potřebují k zodpovězení otázek svých týmů a k pomoci v řešení jejich problémů.

# Další informace

## Registrace týmů

Mentorům je umožněno registrovat své týmy od 16. září 2024. Každý mentor obdrží unikátní ID týmu pro každý registrovaný tým, které bude potřeba při odesílání dokončeného programu týmu.

## Napsání a testování programů

Týmy píší Python programy, které přesně odhadují rychlost ISS. Svůj program mohou testovat pomocí Python knihovny, kterou poskytujeme speciálně pro týmy Mission Space Lab. Tato knihovna simuluje běh jejich programu na základě historických dat z předchozích misí Astro Pi.

K psaní svého Python programu mohou týmy využít jakýkoli počítač s macOS, Windows nebo Linuxem a libovolný editor kódu nebo integrované vývojové prostředí (IDE), které podporuje Python. Je třeba si uvědomit, že počítače Astro Pi nejsou součástí Astro Pi Challenge. Pokud budou chtít, mohou týmy použít svůj vlastní Raspberry Pi pro psaní a testování programu.

## Kontrolní seznam pro programy

Každý program musí splňovat klíčová kritéria, aby mohl být spuštěn na Astro Pi počítačích na palubě ISS. K dispozici bude kontrolní seznam, který pomůže týmům a mentorům zajistit, že je program připraven k odeslání.

## Odeslání programů týmů

Mentor odesílá dokončený a otestovaný program týmu pomocí unikátního odkazu, který je poskytnut pro každý registrovaný tým.

{{< figure src="https://images.ctfassets.net/yft5xyng9e7d/2fTEbPwnPzuUd7vMCTJl6D/bef6c269706e7f063af77f25721378dd/Astro_PI_IR_vis.jpg?h=674&w=1200" cap="Zdroj: ESA" >}}

# Časová osa projektu

<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>Zahájení výzvy</h3>
            <p><strong>16. záží 2024</strong></p>
            <p>Mentoři mohou registrovat své týmy</p>
        </div>
    </div>
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>Fáze Create</h3>
            <p><strong>16. záží 2024 – 24. února 2025</strong></p>
            <p>Týmy mohou testovat program</p>
            <p>Mentoři mohou odevzdávat kompletní programy</p>
            <p>Kontrolní centrum AstroPi program otestuje a vyhodnotí</p>
        </div>
    </div>
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>Fáze Deploy</h3>
            <p><strong>Duben – Květen 2025</strong></p>
            <p>Programy, které projdou testováním získají 'flight status' a jsou nahrány na palubu ISS</p>
        </div>
    </div>
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>Certifikáty</h3>
            <p><strong>Květen – Červen 2025</strong></p>
            <p>Týmy získají data, která získala svým programem na ISS a certifikát účasti</p>
        </div>
    </div>
</div>
---
sidebar_position: 9
title: Temperatur- und Luftfeuchtigkeitssensor
hide_title: false
description: Temperatur- und Luftfeuchtigkeitssensor (HDC1080)
---

# Temperatur- und Luftfeuchtesensor 

Der HDC1080 ist ein digitaler Feuchtigkeits- und Temperatursensor. Der Sensor hat eine hohe Genauigkeit und eine sehr geringe Stromaufnahme und passt dadurch ideal zur senseBox. Die Sensoren sind ab Werk kalibirert und können direkt eingesetzt werden.


![](/img/hardware-bilder/temperatur-luftfeuchte/sensor_temperatur_luftfeuchte.png)

## Technische Information

* "Plug-in-and-Go" senseBox kompatibel
* Relative Luftfeuchte (RH) Betriebsbereich 0% bis 100%
* 14 Bit Messauflösung
* Relative Luftfeuchte Genauigkeit ±4%
* Temperatur Genauigkeit ±0.2°C
* 2100nA Stromzufuhr
* Betriebsspannung 2.7 V bis 5.5 V
* I2C Schnittstelle


## Programmierung

```arduino
#include "SenseBoxMCU.h"
#include <SPI.h>

HDC1080 hdc;

void setup(){
    Serial.begin(9600);
    hdc.begin();
}

void loop(){
    Serial.print("Temperature: ");
    Serial.println(hdc.getTemperature());
    Serial.print("Humidity: ");
    Serial.println(hdc.getHumidity());
}
```


## Programmierung (Blockly)

In Blockly kann der Sensor über folgenden Block ausgelesen werden:

![](/img/hardware-bilder/temperatur-luftfeuchte/block_temperatur_luftfeuchte.svg)

Im Block kannst du zwischen den verschiedenen Parametern des Temperatur und Luftfeuchtigkeitsensor auswählen:

- Temperatur in Grad Celsius (°C)
- Luftfeuchtigkeit in Prozent (%)


>- [Shop](https://sensebox.kaufen/product/temperatur-luftfeuchte)
>- [TI HDC1080 Datenblatt](https://www.ti.com/lit/ds/symlink/hdc1080.pdf)

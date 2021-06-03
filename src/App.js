import { useState, useEffect } from 'react';
import dotenv from 'dotenv'
import {
  Barcode,
  BarcodePicker,
  Camera,
  CameraAccess,
  CameraSettings,
  ScanSettings,
  SingleImageModeSettings,
} from "scandit-sdk";
import ScanditBarcodeScanner from 'scandit-sdk-react'

const LICENSE_KEY = 'AYUgrgehJw+6JurcKQWiRq08XVOgArB9gGDVEexqIWjmTG8k6WK1fQBMNO5oZQ9Uk1GGNtR0wAKfVXi/Llw5sOYr6LSQRue9wh9t7ydXwl8IenKwKHOR0B9Feg0rbZH9G3B8kJNfwg1NHrDfqXFQLvp1/v1Zfrzo1k7+tFZHxbLweqPJS1yI4A9ETfzRVjP+a09cXpNJzDO3bCYApno66/xSYcPFZkEV5UDiTAB/UtQJbiVuRV4xWhVf1fNjZzan1UTrClxSeXYGchpxl33FjkBrV5WYU1dS4AoPekxqmxvqZJDrfXTwgFFLD8/xWkGZ/1nNdJ9fvdSeYAImWVdEnPRAYgJHKhwIeHZgEMZxgfjMRex91UcLZmVptFHJUsKDj2z1vZMvv7G7dVaNGX9NCQlRTqGTRJqPklRUNfoT6UexdCTv4GqKvAdNkxq0WXl2Z3GBrZlq8qUZFhCZU0eFwoFQrcHeYxOJLX0JluFWayNMX3E1qXMd8BBzkNilT0DM+DGI6+8+bwmxQGCNlwLntsvucnHPp++AdYskybzLLMxBgiWZ6+znamJQ7ylXSXLlIvre4eD6s0WTEFN1DGKFeOnIKdEzjpysxVlXol6vrIsgFE3Qxu9G65y/qJPJmk/+61pxyORd1sthscd5iTLKoqIfcHljqYDPPKIDBo0XCLPNa14lMWsch8ZSsp/qUjvy9MdIMA5ULKF+D8siyG03plRAStLi7Ph60o/9kMVS8M1wjPccvFptN6RAU/FtMfWiqeZKGiOFxkv4TD6WnvIVQ8k8a6LyBF2/wh/fXB9gQkr0vTgoAwVL/Er/AQUc3oV2CntgxqNMpVs66I2u7zm1GAGJd9rucgiTO+XeCjligv7ma3ZgNpIoCy6zrUazf5yU5q6FjyldQRmdnaqzzfzezdeFsQJS2M/klMRhkAq5T0/gGKbYlkmigSpASojMG6vETlmPCu2B4ugOND2/nlxp5twz6sb8Dncbwf+SSfg83T7SX3CcSLaQkopalJkt+6eAg5xZrEG81beB8tDLLD/MgTY71mm7/p3fxVa5Aw6ID+y2jyhTRnk1jKzJebPWa5LpfVGR9LvbPt5+aNEQrR+Ib9LzvvGykxcK28cuwK3vb1mmnkkQKKkOaCYBEfCa7wLTBteOmxQ/N7I+fYnYZ3kGipuGGpZYAkia7NVDbOQVn/geMPGCxrxiAs80wDz8/LdJ'

dotenv.config()

const App = () => {
  const [ready, setReady] = useState(false)

  const getScanSettings = () => {
    return new ScanSettings({ enabledSymbologies: [Barcode.Symbology.CODE128] });
  };

  const setReadyValue = () => {
    setReady(!ready)
  }

  return (
    <div>
      <button onClick={setReadyValue}>
        {ready ? 'stop' : 'start?'}
      </button>
      {
        ready
          ? <div>
            <ScanditBarcodeScanner
              licenseKey={LICENSE_KEY}
              onScan={console.log}
              onScanError={console.log}
              scanSettings={getScanSettings()}
            />
          </div>
          : null
      }
    </div>
  );
}

export default App;

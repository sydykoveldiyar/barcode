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

const LICENSE_KEY = 'ASBQ7CuhC1P5OGku3x5EGb8Mj8O7F2tO00MWleBdXSUcKnXoAXO96lx/yH5JRvzxMHTcBiEYiNmWacKfTn016ahruJmyXPVcTkYsOgJtk5c+HNdy70Qf8oofOkKAQqAgd2H1RbtwLd/GffyDFJccRZLV/znSq/ZCJv81zqmR1eHcMqxJ0Xwk3N/0nquAgMV+G9jByq2iTkaSLUwb9wzgb9t2YZM7REXxhjcy+KFOJpmwYngfmS/qUn+dGDfO/zIAzIv0ZgnJLUGxsk1kzHj9qZCvGFc/OOUOfEfQy4tXRtnqscQdAazVWqFzfPHohEhcizBQMzcWKdszZZcpsT5vuxZFJddjH8uPHW+xJBV6+e1CO7SvCL/PRXaqANy3y8UsB4hOsLBEQnr6iDYM7hMomfPjxdPFM0WgHAm22Qbd7QdKoqpkWlE6l8DEA2lfMtbTlg9iAuRIp4sHqvQVs15JigScWlVSV2yC2vnRUcoD3qs5wyCqQH10lEhOv8nl5Yj4VtPQuH7R3LL/i6MmGGUbtKwsm3H/9MRtOA4rMkD3duOcz/RSilnwzpmPJCniXWknpckj4RdVEZdzqwi67Qq2ZY4jOFXPpIb7OeU4vOoOS/IUVthoJ3/a2WZ9O177f6m+cLEOrwG9BhZp7vtSYiULpSN9bPybIzxLdGXSawq5fo6HB3k6rENvBpU59abDlCzr9Elb2J54nys9CvkXXYymw2mNAd2iEdpc6+o8LWKxhOEFHZYRlIdoLVQ0N3WQ5XLfcdd69niL1RGh5V9G1jNKwX+0B1LFolgM4jHry/g+QDF0'

dotenv.config()

const App = () => {
  const [ready, setReady] = useState(false)
  const [result, setResult] = useState('')

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
              engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@5.6.0/build"
              onScan={setResult}
              onScanError={setResult}
              scanSettings={getScanSettings()}
            />
            <div>
              RESULT: {result}
            </div>
          </div>
          : null
      }

    </div>
  );
}

export default App;

@@ .. @@
     sb.innerHTML = `
-      <div class="sidebar-section">
-        <h3>Record Graph Data</h3>
-        <button id="live-record-btn" class="sidebtn record-btn">${this.recording ? 'Stop Recording' : 'Start Recording'}</button>
-        <button id="set-output-file" class="sidebtn">Set Output File</button>
-        <div class="keyboard-hint">Ctrl+R to toggle recording</div>
-        
-        <div class="drive-status-section">
-          <div class="drive-status-header">
-            <span class="drive-status-info">
-              ${driveIntegration.isConnected() ? 
-                `☁️ ${driveIntegration.getProviderName()}` : 
-                '☁️ Drive: Not Connected'
-              }
-            </span>
-            <button id="setup-drive" class="drive-setup-btn">Setup</button>
-          </div>
-          ${driveIntegration.isConnected() ? 
-            '<div style="font-size: 0.8em; color: var(--sidebar-heading);">Files will be auto-uploaded</div>' :
-            '<div style="font-size: 0.8em; color: #ff6b6b;">Connect drive for cloud backup</div>'
-          }
-        </div>
-      </div>
-      
       <div class="sidebar-section">
         <h3>Graph ${this.splitMode ? 'Split' : '1'} - Options</h3>
@@ .. @@
     `;
     
-    this.setupEventListeners();
+    this.setupEventListeners();
@@ .. @@
   setupEventListeners() {
     document.getElementById('live-connect-btn').onclick = () => this.toggleSerial();
-    document.getElementById('live-record-btn').onclick = () => this.toggleRecording();
-    document.getElementById('set-output-file').onclick = () => this.setOutputFile();
-    document.getElementById('setup-drive').onclick = () => driveIntegration.showDriveSetupDialog();
     document.getElementById('baud-rate-btn').onclick = () => this.showBaudRateMenu();
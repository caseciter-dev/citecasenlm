// NotebookLite - Client-Side App Logic

// ==========================================================================
// GITHUB REPOSITORY PRELOADED SOURCES
// List all files in your repository that you want to preload automatically.
// ==========================================================================
const REPO_SOURCES = [
  'docs/welcome_guide.md',
  'docs/features_list.txt'
];

// ==========================================================================
// PRESET NOTEBOOK DATASETS (Rich sample content)
// ==========================================================================
const PRESETS = {
  quantum: [
    {
      id: 'q-superposition',
      title: 'Quantum Superposition.txt',
      type: 'text',
      content: `Quantum superposition is a fundamental principle of quantum mechanics. It states that a physical system—such as an electron or qubit—exists partly in all its theoretically possible states simultaneously. When measured, however, it gives a result corresponding to only one of the possible configurations. 

The classic mathematical representation of a qubit state is written as |ψ⟩ = α|0⟩ + β|1⟩, where α and β are probability amplitudes. The squares of these amplitudes, |α|² and |β|², represent the probabilities of measuring the qubit in the state 0 or 1 respectively. Since the total probability must equal 1, this gives the normalization condition: |α|² + |β|² = 1.

Superposition is often visualized using the Bloch Sphere, a geometrical representation of the pure state space of a two-level quantum mechanical system. The poles of the sphere represent the basis states |0⟩ and |1⟩, while the surface represents other superposition states. Unlike classical bits which can only be at the north or south pole, a qubit can represent any point on the sphere until it is observed. Once a measurement occurs, the state vector collapses instantly to one of the basis states.`,
      wordCount: 195,
      checked: true
    },
    {
      id: 'q-entanglement',
      title: 'Quantum Entanglement Basics.md',
      type: 'text',
      content: `Quantum entanglement is a physical phenomenon that occurs when a group of particles are generated, interact, or share spatial proximity in a way such that the quantum state of each particle cannot be described independently of the state of the others, even when the particles are separated by a large distance.

The state of an entangled system is expressed as a superposition of joint states. For example, one of the four Bell states (maximum entanglement) is written as: |Φ⁺⟩ = 1/√2 (|00⟩ + |11⟩). If two qubits are prepared in this state, measuring the first qubit will instantly reveal the state of the second. If the first qubit measures as |0⟩, the second qubit is guaranteed to measure as |0⟩, regardless of physical separation.

This led Albert Einstein to skeptically refer to entanglement as "spooky action at a distance" (spukhafte Fernwirkung). He, along with Boris Podolsky and Nathan Rosen, proposed the EPR paradox in 1935, arguing that quantum mechanics was incomplete and must contain "local hidden variables." However, subsequent physical experiments violating Bell's inequality (proposed by John Stewart Bell in 1964) proved that quantum mechanics violates local realism, meaning particles do not have predetermined states prior to measurement.`,
      wordCount: 202,
      checked: true
    }
  ],
  rome: [
    {
      id: 'rome-founding',
      title: 'Founding of the Roman Republic.txt',
      type: 'text',
      content: `The Roman Republic was the era of ancient Roman civilization beginning with the overthrow of the Roman Kingdom, traditionally dated to 509 BC, and ending in 27 BC with the establishment of the Roman Empire. During this period, Rome's control expanded from the city's immediate surroundings to hegemony over the entire Mediterranean world.

Roman society under the republic was primarily characterized by the conflict between the patricians (the landed aristocracy) and the plebeians (the common citizens). Over centuries of political strife, known as the Conflict of the Orders, the plebeians secured political equality, including the right to elect Tribunes of the Plebs who possessed the power of veto over magistrate decisions.

The constitution of the Roman Republic was not formal or written, but rather an uncodified set of guidelines and traditional practices. The executive power was concentrated in two consuls, elected annually, who led the armies and presided over the Senate. The Senate itself was an advisory council of elders consisting of patricians, which exercised immense influence over finance, foreign policy, and state religion.`,
      wordCount: 182,
      checked: true
    },
    {
      id: 'rome-punic-wars',
      title: 'The Punic Wars & Expansion.md',
      type: 'text',
      content: `The Punic Wars were a series of three wars fought between Rome and Carthage from 264 BC to 146 BC. At the time, they were some of the largest conflicts that had ever taken place. The term "Punic" comes from the Latin word Punicus (or Poenus), meaning "Carthaginian," referring to their Phoenician ancestry.

The Second Punic War (218–201 BC) is famous for Carthage's military commander Hannibal Barca, who famously marched an army, complete with war elephants, across the Alps to invade Italy from the north. Hannibal achieved legendary victories at Trebia, Lake Trasimene, and Cannae (216 BC), where he surrounded and destroyed a massive Roman army. Despite these setbacks, Rome refused to surrender.

Under the generalship of Publius Cornelius Scipio (later surnamed Africanus), Rome shifted the theater of war to North Africa. Scipio defeated Hannibal at the Battle of Zama in 202 BC, forcing Carthage to agree to a humiliating peace treaty. The Third Punic War (149–146 BC) ended with the total destruction of Carthage by Scipio Aemilianus, solidifying Roman dominance over the western Mediterranean.`,
      wordCount: 183,
      checked: true
    }
  ],
  ml: [
    {
      id: 'ml-networks',
      title: 'Understanding Neural Networks.md',
      type: 'text',
      content: `Artificial Neural Networks (ANNs) are computational models inspired by the structure and function of biological neural networks in the human brain. They form the foundation of modern Deep Learning, mapping inputs to outputs through layers of interconnected nodes called neurons.

A single neuron (or perceptron) takes multiple inputs, multiplies each by a corresponding weight (w), adds a bias term (b), and passes the sum through an activation function to produce an output. Mathematically, this is expressed as: y = f(Σ w_i * x_i + b). Common activation functions include Sigmoid, tanh, and rectified linear unit (ReLU), which introduces non-linearity into the model, allowing it to learn complex patterns.

Modern deep networks consist of an input layer, multiple hidden layers, and an output layer. Training a neural network involves two main phases: forward propagation and backpropagation. During forward propagation, inputs pass through the network to generate predictions. The discrepancy between predictions and targets is calculated using a loss function. During backpropagation, the gradient of the loss is computed with respect to weights using the chain rule, and weights are updated using optimization algorithms like Gradient Descent.`,
      wordCount: 191,
      checked: true
    },
    {
      id: 'ml-overfitting',
      title: 'Overfitting and Regularization.txt',
      type: 'text',
      content: `In machine learning, overfitting occurs when a statistical model fits its training data too closely, capturing noise and random fluctuations rather than the underlying data distribution. Consequently, an overfitted model performs exceptionally well on training data but fails to generalize to new, unseen testing data.

Overfitting is typically identified when training error continues to decrease while validation or testing error begins to rise. To combat overfitting, machine learning practitioners use various techniques collectively known as regularization.

Key regularization methods include:
1. L1 and L2 Regularization (Weight Decay): These add a penalty term to the loss function proportional to the size of the weights. L1 (Lasso) adds the absolute values of weights, promoting sparsity (zero weights), while L2 (Ridge) adds the squared values, preventing any single weight from becoming too large.
2. Dropout: A technique used in neural networks where random neurons are deactivated during training, preventing co-adaptation.
3. Early Stopping: Terminating the training process when validation performance begins to degrade, even if training loss is still decreasing.`,
      wordCount: 175,
      checked: true
    }
  ]
};

// ==========================================================================
// APP STATE
// ==========================================================================
let state = {
  sources: [],
  messages: [],
  apiKey: localStorage.getItem('notebooklite_gemini_key') || '',
  activeTab: 'tab-chat',
  theme: localStorage.getItem('notebooklite_theme') || 'dark'
};

// ==========================================================================
// DOM SELECTORS
// ==========================================================================
const DOM = {
  notebookTitle: document.getElementById('notebook-title'),
  headerStats: document.getElementById('header-stats'),
  btnThemeToggle: document.getElementById('btn-theme-toggle'),
  btnSettings: document.getElementById('btn-settings'),
  sourceCount: document.getElementById('source-count'),
  sourcesList: document.getElementById('sources-list'),
  btnToggleAllSources: document.getElementById('btn-toggle-all-sources'),
  chatMessages: document.getElementById('chat-messages'),
  chatForm: document.getElementById('chat-form'),
  chatInput: document.getElementById('chat-input'),
  chatSuggestions: document.getElementById('chat-suggestions'),
  contextPill: document.getElementById('context-pill'),
  contextPillText: document.getElementById('context-pill-text'),
  
  // Modals
  modalSettings: document.getElementById('modal-settings'),
  modalAddText: document.getElementById('modal-add-text'),
  modalAddUrl: document.getElementById('modal-add-url'),
  modalAddFile: document.getElementById('modal-add-file'),
  modalDocViewer: document.getElementById('modal-doc-viewer'),
  
  // Modal forms
  settingsForm: document.getElementById('settings-form'),
  geminiKey: document.getElementById('gemini-key'),
  btnToggleKeyVisibility: document.getElementById('btn-toggle-key-visibility'),
  settingsApiStatus: document.getElementById('settings-api-status'),
  
  addTextForm: document.getElementById('add-text-form'),
  textDocTitle: document.getElementById('text-doc-title'),
  textDocContent: document.getElementById('text-doc-content'),
  
  addUrlForm: document.getElementById('add-url-form'),
  urlAddress: document.getElementById('url-address'),
  
  dropzone: document.getElementById('dropzone'),
  fileInput: document.getElementById('file-input'),
  btnBrowseFiles: document.getElementById('btn-browse-files'),
  uploadStatusList: document.getElementById('upload-status-list'),
  
  // Doc viewer
  viewerDocTitle: document.getElementById('viewer-doc-title'),
  viewerDocMeta: document.getElementById('viewer-doc-meta'),
  viewerDocText: document.getElementById('viewer-doc-text'),
  
  // Citation Popover
  citationPopover: document.getElementById('citation-popover'),
  citationSourceTitle: document.getElementById('citation-source-title'),
  citationSourceText: document.getElementById('citation-source-text'),
  btnCloseCitation: document.getElementById('btn-close-citation'),
  
  apiStatusText: document.getElementById('api-status-text')
};

// ==========================================================================
// CORE INITIALIZATION
// ==========================================================================
function init() {
  setupEventListeners();
  loadSavedData();
  applyTheme();
  updateApiStatusUI();
  
  // Preload files from GitHub Repository
  preloadRepoSources();
  
  // Auto-resize chat textarea
  DOM.chatInput.addEventListener('input', () => {
    DOM.chatInput.style.height = 'auto';
    DOM.chatInput.style.height = DOM.chatInput.scrollHeight + 'px';
  });
}

// Load sources and chats from localStorage
function loadSavedData() {
  const savedSources = localStorage.getItem('notebooklite_sources');
  const savedTitle = localStorage.getItem('notebooklite_title');
  
  if (savedSources) {
    state.sources = JSON.parse(savedSources);
  } else {
    // If first visit, load Quantum Computing preset so they aren't met with an empty screen
    loadPreset('quantum');
  }
  
  if (savedTitle) {
    DOM.notebookTitle.value = savedTitle;
  }
  
  renderSources();
  updateHeaderStats();
  renderWelcomeMessage();
}

// Save sources to localStorage
function saveSources() {
  localStorage.setItem('notebooklite_sources', JSON.stringify(state.sources));
}

// Preload files from repository (works on local web server or GitHub Pages)
async function preloadRepoSources() {
  for (const filePath of REPO_SOURCES) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) continue;
      
      const content = await response.text();
      const title = filePath.split('/').pop();
      const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
      
      const id = 'repo-' + filePath.replace(/[^a-zA-Z0-9]/g, '-');
      const existingIdx = state.sources.findIndex(s => s.repoPath === filePath);
      
      const sourceObj = {
        id,
        title,
        type: 'text',
        content,
        wordCount,
        checked: true,
        repoPath: filePath
      };
      
      if (existingIdx !== -1) {
        state.sources[existingIdx] = sourceObj;
      } else {
        state.sources.push(sourceObj);
      }
    } catch (err) {
      console.warn(`Failed to preload repo file: ${filePath}. (Note: fetch is blocked on file:// protocol, but works on GitHub Pages or local HTTP servers)`, err);
    }
  }
  
  saveSources();
  renderSources();
  updateHeaderStats();
  renderSuggestedQuestions();
}

// ==========================================================================
// EVENT HANDLERS & NAVIGATION
// ==========================================================================
function setupEventListeners() {
  // Theme Toggle
  DOM.btnThemeToggle.addEventListener('click', toggleTheme);
  
  // Rename Notebook
  DOM.notebookTitle.addEventListener('change', () => {
    localStorage.setItem('notebooklite_title', DOM.notebookTitle.value);
  });
  
  // Modal Opening buttons
  DOM.btnSettings.addEventListener('click', () => openModal(DOM.modalSettings));
  document.getElementById('btn-add-text').addEventListener('click', () => openModal(DOM.modalAddText));
  document.getElementById('btn-add-url').addEventListener('click', () => openModal(DOM.modalAddUrl));
  document.getElementById('btn-add-file').addEventListener('click', () => openModal(DOM.modalAddFile));
  
  // Toggle show/hide API key
  DOM.btnToggleKeyVisibility.addEventListener('click', toggleKeyVisibility);
  
  // Close Modals
  document.querySelectorAll('.btn-close-modal, [data-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = btn.getAttribute('data-modal') || btn.closest('.modal-overlay').id;
      closeModal(document.getElementById(modalId));
    });
  });
  
  // Settings Form Submit
  DOM.settingsForm.addEventListener('submit', handleSettingsSubmit);
  
  // Paste Text Form Submit
  DOM.addTextForm.addEventListener('submit', handleAddTextSubmit);
  
  // Add URL Form Submit
  DOM.addUrlForm.addEventListener('submit', handleAddUrlSubmit);
  
  // File Upload Handlers
  DOM.btnBrowseFiles.addEventListener('click', () => DOM.fileInput.click());
  DOM.fileInput.addEventListener('change', handleFileSelect);
  
  DOM.dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    DOM.dropzone.classList.add('dragover');
  });
  DOM.dropzone.addEventListener('dragleave', () => DOM.dropzone.classList.remove('dragover'));
  DOM.dropzone.addEventListener('drop', handleFileDrop);
  
  // Preset Loading
  document.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetName = btn.getAttribute('data-preset');
      loadPreset(presetName);
    });
  });
  
  // Toggle All Sources Button
  DOM.btnToggleAllSources.addEventListener('click', toggleAllSources);
  
  // Chat Form Submit
  DOM.chatForm.addEventListener('submit', handleChatSubmit);
  
  // Citation Popover Close
  DOM.btnCloseCitation.addEventListener('click', hideCitationPopover);
  
  // Close popover when clicking outside
  document.addEventListener('click', (e) => {
    if (!DOM.citationPopover.classList.contains('hidden') && 
        !DOM.citationPopover.contains(e.target) && 
        !e.target.classList.contains('citation-badge') &&
        !e.target.closest('.citation-badge')) {
      hideCitationPopover();
    }
  });
}

// Modals management
function openModal(modal) {
  modal.classList.add('active');
  if (modal === DOM.modalSettings) {
    DOM.geminiKey.value = state.apiKey;
  }
}

function closeModal(modal) {
  modal.classList.remove('active');
  if (modal === DOM.modalAddFile) {
    DOM.uploadStatusList.innerHTML = '';
  }
}

// Toggle eye icon for key field
function toggleKeyVisibility() {
  const type = DOM.geminiKey.getAttribute('type') === 'password' ? 'text' : 'password';
  DOM.geminiKey.setAttribute('type', type);
  const icon = DOM.btnToggleKeyVisibility.querySelector('i');
  icon.classList.toggle('fa-eye');
  icon.classList.toggle('fa-eye-slash');
}

// API status labels
function updateApiStatusUI() {
  const hasKey = state.apiKey.trim().length > 0;
  
  if (hasKey) {
    DOM.settingsApiStatus.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent-secondary)"></i> API status: <strong>Configured</strong>. Live Gemini calls are enabled.`;
    DOM.btnSettings.innerHTML = `<i class="fa-solid fa-key" style="color:var(--accent-secondary)"></i> Settings`;
    if (DOM.apiStatusText) {
      DOM.apiStatusText.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent-secondary)"></i> Running in <strong>Live Gemini Mode</strong>. Responses are grounded in your selected sources.`;
    }
  } else {
    DOM.settingsApiStatus.innerHTML = `<i class="fa-solid fa-circle-question" style="color:var(--text-muted)"></i> API status: <strong>Not Configured</strong> (Operating in Offline Simulation mode).`;
    DOM.btnSettings.innerHTML = `<i class="fa-solid fa-key"></i> Settings`;
    if (DOM.apiStatusText) {
      DOM.apiStatusText.innerHTML = `<i class="fa-solid fa-circle-info"></i> Running in <strong>Smart Offline Simulation Mode</strong>. Add a Gemini API Key in Settings to enable real-time semantic answering.`;
    }
  }
}

// Theme management
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('notebooklite_theme', state.theme);
  applyTheme();
}

function applyTheme() {
  const isLight = state.theme === 'light';
  document.body.classList.toggle('light-theme', isLight);
  document.body.classList.toggle('dark-theme', !isLight);
  
  const icon = DOM.btnThemeToggle.querySelector('i');
  if (isLight) {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

// Preset Loader
function loadPreset(name) {
  if (PRESETS[name]) {
    // Append or overwrite sources? Let's append but check for duplicates, or simply add
    const currentTitles = state.sources.map(s => s.title);
    
    PRESETS[name].forEach(source => {
      if (!currentTitles.includes(source.title)) {
        state.sources.push({ ...source });
      }
    });
    
    saveSources();
    renderSources();
    updateHeaderStats();
    renderSuggestedQuestions();
    
    // Smooth scroll list to bottom
    DOM.sourcesList.scrollTop = DOM.sourcesList.scrollHeight;
  }
}

// Toggle selection state of all sources
function toggleAllSources() {
  const allChecked = state.sources.every(s => s.checked);
  
  state.sources.forEach(s => {
    s.checked = !allChecked;
  });
  
  saveSources();
  renderSources();
  updateHeaderStats();
  renderSuggestedQuestions();
  
  DOM.btnToggleAllSources.innerText = allChecked ? "Select All" : "Unselect All";
}

// ==========================================================================
// SOURCE HANDLING & RENDERING
// ==========================================================================
function renderSources() {
  if (state.sources.length === 0) {
    DOM.sourcesList.innerHTML = `
      <div class="empty-state-small">
        <i class="fa-solid fa-folder-open"></i>
        <p>No sources uploaded yet. Choose an option above or load a sample workspace to begin.</p>
      </div>`;
    DOM.sourceCount.innerText = '0';
    return;
  }
  
  DOM.sourcesList.innerHTML = '';
  DOM.sourceCount.innerText = state.sources.length;
  
  state.sources.forEach(source => {
    const card = document.createElement('div');
    card.className = `source-card ${source.checked ? 'checked' : ''}`;
    
    // Choose icon based on file type
    let iconClass = 'fa-solid fa-file-lines';
    if (source.title.endsWith('.pdf')) iconClass = 'fa-solid fa-file-pdf';
    else if (source.title.endsWith('.md')) iconClass = 'fa-solid fa-file-code';
    else if (source.type === 'url') iconClass = 'fa-solid fa-earth-americas';
    
    card.innerHTML = `
      <div class="source-card-checkbox">
        <input type="checkbox" ${source.checked ? 'checked' : ''} data-id="${source.id}">
        <span class="checkmark"></span>
      </div>
      <div class="source-icon">
        <i class="${iconClass}"></i>
      </div>
      <div class="source-info" data-id="${source.id}">
        <span class="source-name" title="${source.title}">${source.title}</span>
        <span class="source-meta">${source.wordCount} words</span>
      </div>
      <div class="source-card-actions">
        <button class="btn-card-action btn-view-src" data-id="${source.id}" title="View Content">
          <i class="fa-solid fa-eye"></i>
        </button>
        <button class="btn-card-action delete btn-delete-src" data-id="${source.id}" title="Remove Source">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    
    // Card checkbox event
    card.querySelector('input').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSourceChecked(source.id);
    });
    
    // Click info area to toggle checking
    card.querySelector('.source-info').addEventListener('click', () => {
      toggleSourceChecked(source.id);
    });
    
    // View Content Click
    card.querySelector('.btn-view-src').addEventListener('click', (e) => {
      e.stopPropagation();
      openDocViewer(source.id);
    });
    
    // Delete Click
    card.querySelector('.btn-delete-src').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteSource(source.id);
    });
    
    DOM.sourcesList.appendChild(card);
  });
}

function toggleSourceChecked(id) {
  const source = state.sources.find(s => s.id === id);
  if (source) {
    source.checked = !source.checked;
    saveSources();
    renderSources();
    updateHeaderStats();
    renderSuggestedQuestions();
  }
}

function deleteSource(id) {
  state.sources = state.sources.filter(s => s.id !== id);
  saveSources();
  renderSources();
  updateHeaderStats();
  renderSuggestedQuestions();
}

function updateHeaderStats() {
  const activeCount = state.sources.filter(s => s.checked).length;
  DOM.headerStats.innerHTML = `<i class="fa-solid fa-database"></i> ${activeCount} source${activeCount === 1 ? '' : 's'} selected`;
  DOM.contextPillText.innerText = `${activeCount} source${activeCount === 1 ? '' : 's'} selected`;
}

// Opens the Source Document Viewer Modal
function openDocViewer(id) {
  const source = state.sources.find(s => s.id === id);
  if (source) {
    DOM.viewerDocTitle.innerText = source.title;
    DOM.viewerDocMeta.innerText = `${source.content.length} characters | ${source.wordCount} words`;
    DOM.viewerDocText.innerText = source.content;
    openModal(DOM.modalDocViewer);
  }
}

// ==========================================================================
// SOURCE UPLOAD & SUBMISSIONS
// ==========================================================================

// Handle Settings Submit (Gemini Key)
function handleSettingsSubmit(e) {
  e.preventDefault();
  const key = DOM.geminiKey.value.trim();
  state.apiKey = key;
  localStorage.setItem('notebooklite_gemini_key', key);
  
  updateApiStatusUI();
  closeModal(DOM.modalSettings);
}

// Handle Paste Text Submission
function handleAddTextSubmit(e) {
  e.preventDefault();
  const title = DOM.textDocTitle.value.trim();
  const content = DOM.textDocContent.value.trim();
  
  if (title && content) {
    const id = 'custom-text-' + Date.now();
    const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
    
    state.sources.push({
      id,
      title: title.endsWith('.txt') || title.endsWith('.md') ? title : title + '.txt',
      type: 'text',
      content,
      wordCount,
      checked: true
    });
    
    saveSources();
    renderSources();
    updateHeaderStats();
    renderSuggestedQuestions();
    
    // Clear form
    DOM.textDocTitle.value = '';
    DOM.textDocContent.value = '';
    
    closeModal(DOM.modalAddText);
    
    // Scroll list
    DOM.sourcesList.scrollTop = DOM.sourcesList.scrollHeight;
  }
}

// Handle Add URL Submission (Simulated)
function handleAddUrlSubmit(e) {
  e.preventDefault();
  const url = DOM.urlAddress.value.trim();
  
  if (url) {
    const id = 'custom-url-' + Date.now();
    let siteName = 'Extracted Web Article';
    try {
      const parsedUrl = new URL(url);
      siteName = parsedUrl.hostname.replace('www.', '') + ' Article';
    } catch(err) {}
    
    // Simulated content generation based on hostname/path
    const simulatedTitle = siteName;
    const simulatedContent = `Simulated scrape of website source: ${url}\n\nThis document represents the text content extracted from the web address. In a full system, a server-side parser or CORS-enabled reader retrieves the HTML, strips script tags, and returns the markdown text body.\n\nKey contents discovered on page:\n- Introduction to the site topic.\n- Main structured outline and thematic elements.\n- Reference links and summary of conclusions.\n- Author contributions and publishing metadata.`;
    const wordCount = simulatedContent.split(/\s+/).filter(w => w.length > 0).length;
    
    state.sources.push({
      id,
      title: simulatedTitle,
      type: 'url',
      content: simulatedContent,
      wordCount,
      checked: true
    });
    
    saveSources();
    renderSources();
    updateHeaderStats();
    renderSuggestedQuestions();
    
    DOM.urlAddress.value = '';
    closeModal(DOM.modalAddUrl);
    
    DOM.sourcesList.scrollTop = DOM.sourcesList.scrollHeight;
  }
}

// Drag & drop file processing
function handleFileSelect(e) {
  const files = e.target.files;
  processUploadedFiles(files);
}

function handleFileDrop(e) {
  e.preventDefault();
  DOM.dropzone.classList.remove('dragover');
  const files = e.dataTransfer.files;
  processUploadedFiles(files);
}

function processUploadedFiles(files) {
  Array.from(files).forEach(file => {
    const isText = file.name.endsWith('.txt') || file.name.endsWith('.md');
    
    // Create UI progress item
    const progressItem = document.createElement('div');
    progressItem.className = 'upload-progress-item';
    progressItem.innerHTML = `
      <span class="name">${file.name}</span>
      <span class="status">Reading...</span>
    `;
    DOM.uploadStatusList.appendChild(progressItem);
    
    if (!isText) {
      progressItem.querySelector('.status').innerHTML = `<span style="color:var(--danger-color)">Unrecognized format</span>`;
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
      const id = 'file-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
      
      state.sources.push({
        id,
        title: file.name,
        type: 'text',
        content,
        wordCount,
        checked: true
      });
      
      saveSources();
      renderSources();
      updateHeaderStats();
      renderSuggestedQuestions();
      
      progressItem.querySelector('.status').innerText = 'Added!';
    };
    
    reader.onerror = () => {
      progressItem.querySelector('.status').innerHTML = `<span style="color:var(--danger-color)">Error reading file</span>`;
    };
    
    reader.readAsText(file);
  });
}

// ==========================================================================
// CHAT INTERACTION & SIMULATION ENGINE
// ==========================================================================

function renderWelcomeMessage() {
  DOM.chatMessages.innerHTML = `
    <div class="chat-welcome-card">
      <i class="fa-solid fa-seedling welcome-icon"></i>
      <h2>Welcome to your Document Chat!</h2>
      <p>NotebookLite focus is on answering questions, extracting concepts, and synthesizing findings directly from your custom documents. Everything happens securely in your browser.</p>
      <div class="feature-bullets">
        <div class="bullet-item">
          <i class="fa-solid fa-shield-halved"></i>
          <span><strong>100% Client-Side Context:</strong> Active sources are compiled locally to prompt the model.</span>
        </div>
        <div class="bullet-item">
          <i class="fa-solid fa-quote-right"></i>
          <span><strong>Source Grounded Answers:</strong> Clickable citation badges trace responses directly back to passages.</span>
        </div>
        <div class="bullet-item">
          <i class="fa-solid fa-bolt"></i>
          <span><strong>Custom Sources:</strong> Paste lecture notes, add website URLs, or drop files.</span>
        </div>
      </div>
      <p class="api-status-hint" id="api-status-text">
        <!-- API status text populated in JS -->
      </p>
    </div>
  `;
  updateApiStatusUI();
  renderSuggestedQuestions();
}

// Generates suggested questions based on the active sources
function renderSuggestedQuestions() {
  const activeSources = state.sources.filter(s => s.checked);
  
  if (activeSources.length === 0) {
    DOM.chatSuggestions.classList.add('hidden');
    return;
  }
  
  DOM.chatSuggestions.classList.remove('hidden');
  DOM.chatSuggestions.innerHTML = '';
  
  // Pick suggestions depending on presets present
  let questions = [
    "Summarize my active sources in bullet points.",
    "What are the core concepts covered?"
  ];
  
  const hasQuantum = activeSources.some(s => s.title.includes('Quantum') || s.content.includes('qubit'));
  const hasRome = activeSources.some(s => s.title.includes('Roman') || s.content.includes('Republic') || s.content.includes('Punic'));
  const hasML = activeSources.some(s => s.title.includes('Neural') || s.content.includes('Regularization') || s.content.includes('overfitting'));
  
  if (hasQuantum) {
    questions.push("Explain what |ψ⟩ = α|0⟩ + β|1⟩ means.", "What was Einstein's objection to entanglement?");
  }
  if (hasRome) {
    questions.push("Who fought in the Second Punic War?", "How was the Roman Republic governed?");
  }
  if (hasML) {
    questions.push("What is the difference between L1 and L2 regularization?", "How is backpropagation structured?");
  }
  
  // Slice to max 3
  questions.slice(0, 3).forEach(question => {
    const btn = document.createElement('button');
    btn.className = 'suggestion-pill';
    btn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> ${question}`;
    btn.addEventListener('click', () => {
      DOM.chatInput.value = question;
      handleChatSubmit(null);
    });
    DOM.chatSuggestions.appendChild(btn);
  });
}

// Submit Chat Message
async function handleChatSubmit(e) {
  if (e) e.preventDefault();
  
  const query = DOM.chatInput.value.trim();
  if (!query) return;
  
  const activeSources = state.sources.filter(s => s.checked);
  if (activeSources.length === 0) {
    alert("Please check at least one source document in the sidebar to chat with.");
    return;
  }
  
  // Remove welcome card if it's the first message
  if (DOM.chatMessages.querySelector('.chat-welcome-card')) {
    DOM.chatMessages.innerHTML = '';
  }
  
  // Add User Message
  appendChatMessage('user', query);
  DOM.chatInput.value = '';
  DOM.chatInput.style.height = 'auto';
  
  // Add typing indicator
  const typingId = appendTypingIndicator();
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
  
  try {
    let answerObj;
    if (state.apiKey.trim().length > 0) {
      answerObj = await generateGeminiResponse(query, activeSources);
    } else {
      answerObj = await generateOfflineResponse(query, activeSources);
    }
    
    // Remove typing indicator and append answer
    removeTypingIndicator(typingId);
    appendChatMessage('ai', answerObj.text, answerObj.citations);
  } catch (err) {
    console.error(err);
    removeTypingIndicator(typingId);
    appendChatMessage('ai', `I encountered an error trying to process your request:\n\n\`${err.message}\`\n\nPlease check your internet connection or verify your API key in Settings.`);
  }
  
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

// Append chat balloon to panel
function appendChatMessage(sender, text, citations = []) {
  const bubble = document.createElement('div');
  bubble.className = `message-bubble ${sender}`;
  
  let avatarIcon = 'fa-user';
  if (sender === 'ai') avatarIcon = 'fa-microchip';
  
  bubble.innerHTML = `
    <div class="bubble-avatar">
      <i class="fa-solid ${avatarIcon}"></i>
    </div>
    <div class="bubble-body">
      <div class="bubble-content markdown-body">
        ${formatMarkdown(text)}
      </div>
      <div class="citations-area"></div>
    </div>
  `;
  
  // Append citations
  if (citations && citations.length > 0) {
    const citationsList = bubble.querySelector('.citations-area');
    citations.forEach((cit, index) => {
      const badge = document.createElement('button');
      badge.className = 'citation-badge';
      badge.innerHTML = `<span class="citation-inline-num">${cit.num}</span> ${cit.title}`;
      badge.addEventListener('click', (e) => {
        showCitationPopover(e.target, cit.title, cit.quote);
      });
      citationsList.appendChild(badge);
    });
  }
  
  DOM.chatMessages.appendChild(bubble);
  
  // Add listeners to inline citations [1], [2] inside text
  bubble.querySelectorAll('.inline-citation-btn').forEach(btn => {
    const num = parseInt(btn.getAttribute('data-num'));
    const citation = citations.find(c => c.num === num);
    if (citation) {
      btn.addEventListener('click', (e) => {
        showCitationPopover(e, citation.title, citation.quote);
      });
    }
  });
}

function appendTypingIndicator() {
  const id = 'typing-' + Date.now();
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble ai';
  bubble.id = id;
  bubble.innerHTML = `
    <div class="bubble-avatar"><i class="fa-solid fa-microchip"></i></div>
    <div class="bubble-body">
      <div class="bubble-content">
        <div class="typing-indicator">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  `;
  DOM.chatMessages.appendChild(bubble);
  return id;
}

function removeTypingIndicator(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// Show Floating Citation Popover
function showCitationPopover(targetElement, title, quote) {
  DOM.citationSourceTitle.innerText = title;
  DOM.citationSourceText.innerText = `"...${quote}..."`;
  
  DOM.citationPopover.classList.remove('hidden');
  
  // Position popover relative to clicked target
  const rect = targetElement.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();
  const chatRect = DOM.chatMessages.getBoundingClientRect();
  
  let left = rect.left - bodyRect.left;
  let top = rect.bottom - bodyRect.top + 8;
  
  // Bound check so it doesn't leak off screen
  if (left + 320 > window.innerWidth) {
    left = window.innerWidth - 340;
  }
  
  DOM.citationPopover.style.left = left + 'px';
  DOM.citationPopover.style.top = top + 'px';
}

function hideCitationPopover() {
  DOM.citationPopover.classList.add('hidden');
}

// Simple text formatter for headers, bolding, line-breaks and bullet lists
function formatMarkdown(text) {
  // Safe HTML escape
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Code block
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Bullet lists
  html = html.replace(/^\s*-\s+(.*?)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  
  // Citations markup replacement e.g. [1] or [2]
  html = html.replace(/\[(\d+)\]/g, '<button class="inline-citation-btn" data-num="$1">[$1]</button>');
  
  // Line-breaks (avoiding double breaks in lists)
  html = html.replace(/\n/g, '<br>');
  
  return html;
}

// ==========================================================================
// OFFLINE QUERY ENGINE (LOCAL KEYWORD SEARCH)
// ==========================================================================
function generateOfflineResponse(query, activeSources) {
  return new Promise((resolve) => {
    // Artificial 1-second delay for simulation feel
    setTimeout(() => {
      const cleanQuery = query.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
        .split(/\s+/)
        .filter(w => w.length > 3 && !['what', 'about', 'explain', 'where', 'would', 'could', 'should', 'with', 'from', 'their', 'there'].includes(w));
        
      let matchingSentences = [];
      
      activeSources.forEach((src, idx) => {
        // Split text content into sentences
        const sentences = src.content.split(/[.!?]\s+/);
        
        sentences.forEach(sentence => {
          if (sentence.trim().length === 0) return;
          
          let score = 0;
          cleanQuery.forEach(word => {
            if (sentence.toLowerCase().includes(word)) {
              score++;
            }
          });
          
          if (score > 0) {
            matchingSentences.push({
              text: sentence.trim(),
              sourceId: src.id,
              sourceTitle: src.title,
              sourceIdx: idx + 1,
              score: score
            });
          }
        });
      });
      
      // Sort sentences by score descending
      matchingSentences.sort((a, b) => b.score - a.score);
      
      let answerText = "";
      let citations = [];
      
      if (matchingSentences.length > 0) {
        // Take top sentences
        const topSentences = matchingSentences.slice(0, 4);
        
        answerText = `Based on your active source document${activeSources.length > 1 ? 's' : ''}, here is the information matching your query:\n\n`;
        
        // Group by source to create a readable synthesis
        const grouped = {};
        topSentences.forEach(s => {
          if (!grouped[s.sourceTitle]) {
            grouped[s.sourceTitle] = {
              sourceIdx: s.sourceIdx,
              sentences: []
            };
          }
          grouped[s.sourceTitle].sentences.push(s.text);
        });
        
        let citationCounter = 1;
        Object.entries(grouped).forEach(([title, group]) => {
          answerText += `**From ${title}:**\n`;
          group.sentences.forEach(sent => {
            answerText += `- ${sent}. [${citationCounter}]\n`;
            
            // Build citation objects
            citations.push({
              num: citationCounter,
              title: title,
              quote: sent.slice(0, 80) + '...'
            });
            citationCounter++;
          });
          answerText += `\n`;
        });
        
        answerText += `*Please note: This answer was compiled locally using key-phrase extraction. Enter a Gemini API Key in the Settings menu above to enable true neural chat.*`;
      } else {
        // Fallback generic answer summarizing documents
        answerText = `I couldn't find a direct keyword match for your question in the active documents.\n\nHere is a summary of the active files in your context:\n\n`;
        
        let citationCounter = 1;
        activeSources.forEach((src, idx) => {
          const firstPara = src.content.split('\n\n')[0] || src.content.slice(0, 200);
          answerText += `**${src.title}** covers the following topic: "${firstPara.slice(0, 150)}..." [${citationCounter}]\n\n`;
          
          citations.push({
            num: citationCounter,
            title: src.title,
            quote: firstPara.slice(0, 80) + '...'
          });
          citationCounter++;
        });
      }
      
      resolve({
        text: answerText,
        citations: citations
      });
    }, 1200);
  });
}

// ==========================================================================
// ONLINE QUERY ENGINE (GEMINI API calls)
// ==========================================================================
async function generateGeminiResponse(query, activeSources) {
  // Construct context block
  let contextBlock = "Here are the source documents:\n\n";
  activeSources.forEach((src, index) => {
    contextBlock += `--- START OF DOCUMENT ${index + 1}: ${src.title} ---\n`;
    contextBlock += src.content;
    contextBlock += `\n--- END OF DOCUMENT ${index + 1} ---\n\n`;
  });
  
  const systemPrompt = `You are a helpful AI document-answering assistant. You must answer the user's question relying ONLY on the source documents provided. If the answer cannot be inferred from the documents, say "I cannot find any reference to that in the active source documents."

CRITICAL INSTRUCTIONS FOR CITATIONS:
1. For every assertion, claim, or quote you retrieve from the sources, append an inline citation with its document number, like [1] or [2].
2. Place the citation at the end of the sentence or block representing that fact.
3. Only use document indexes (e.g. [1], [2], etc.) that correspond to the documents provided.
4. Keep citations concise. Do not explain the index numbers in the text.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${state.apiKey}`;
  
  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: `${contextBlock}\n\nUser Question: ${query}` }]
      }
    ],
    systemInstruction: {
      parts: [{ text: systemPrompt }]
    },
    generationConfig: {
      temperature: 0.2
    }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `HTTP Error ${response.status}`);
  }

  const data = await response.json();
  const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!responseText) {
    throw new Error("Empty response received from Gemini.");
  }
  
  // Build citation metadata dynamically by looking for [1], [2], etc., in the response
  const citations = [];
  const citationRegex = /\[(\d+)\]/g;
  let match;
  const processedIndexes = new Set();
  
  while ((match = citationRegex.exec(responseText)) !== null) {
    const docIdx = parseInt(match[1]) - 1;
    if (docIdx >= 0 && docIdx < activeSources.length && !processedIndexes.has(docIdx)) {
      processedIndexes.add(docIdx);
      const src = activeSources[docIdx];
      
      // Attempt to extract a short relevant quote from the source content to show in the citation hover
      let sampleQuote = src.content.split('\n')[0] || "Referenced source content.";
      if (sampleQuote.length > 100) sampleQuote = sampleQuote.slice(0, 97) + '...';
      
      citations.push({
        num: docIdx + 1,
        title: src.title,
        quote: sampleQuote
      });
    }
  }
  
  return {
    text: responseText,
    citations: citations
  };
}

// Initialise App
document.addEventListener('DOMContentLoaded', init);

/** Base chat l10n containing all required properties to provide localized copy. */
export const l10n = {
  en: {
    attachmentButtonAccessibilityLabel: 'Send media',
    emptyChatPlaceholder: 'No messages here yet',
    fileButtonAccessibilityLabel: 'File',
    inputPlaceholder: 'Message',
    sendButtonAccessibilityLabel: 'Send',
    modelNotLoaded: 'Model not loaded. Please initialize the model.',
    loadingModel: 'Loading model ...',
    typeYourMessage: 'Type your message here',
    conversationReset: 'Conversation reset!',
    networkError: 'Network error. Please try again.',
    goToModels: 'Go to Models',
    readyToChat: 'Ready to chat? Load the last used model.',
    pleaseLoadModel: 'Please load a model to start chatting.',
    shortMemoryWarning: 'Memory Warning',
    memoryWarning:
      "Warning: Model size is close to or exceeds your device's total memory ({{totalMemory}} GB). This may cause unexpected behavior such as slow performance or system instability.",
    load: 'Load',
    cancel: 'Cancel',
    download: 'Download',
    offload: 'Offload',
    reset: 'Reset',
    delete: 'Delete',
    dismiss: 'Dismiss',
    replace: 'Replace',
    keepBoth: 'Keep Both',
    fileAlreadyExists: 'File already exists',
    fileAlreadyExistsMessage:
      'A file with this name already exists. What would you like to do?',
    addLocalModel: 'Add Local Model',
    localModel: 'Local Model',
    resetModels: 'Reset Models',
    downloaded: 'Downloaded',
    grouped: 'Grouped',
    proceedWithReset: 'Proceed with Reset',
    confirmReset: 'Confirm Reset',
    modelSettingsTitle: 'Model Settings',
    autoOffloadLoad: 'Auto Offload/Load',
    autoOffloadLoadDescription: 'Offload model when app is in background.',
    metal: 'Metal',
    metalDescription: "Apple's hardware-accelerated API.",
    layersOnGPU: 'Layers on GPU: {{gpuLayers}}',
    contextSize: 'Context Size',
    contextSizePlaceholder: 'Enter context size (min {{minContextSize}})',
    invalidContextSizeError:
      'Please enter a valid number (minimum {{minContextSize}})',
    modelReloadNotice: 'Model reload needed for changes to take effect.',
    autoNavigateToChat: 'Auto-Navigate to Chat',
    autoNavigateToChatDescription: 'Navigate to chat when loading starts.',
    uiSettingsTitle: 'UI Settings',
    darkMode: 'Dark Mode',
    darkModeDescription: 'Toggle dark mode on or off.',
    displayMemoryUsage: 'Display Memory Usage',
    displayMemoryUsageDescription: 'Display memory usage in the chat page.',
  },
  es: {
    attachmentButtonAccessibilityLabel: 'Enviar multimedia',
    emptyChatPlaceholder: 'Aún no hay mensajes',
    fileButtonAccessibilityLabel: 'Archivo',
    inputPlaceholder: 'Mensaje',
    sendButtonAccessibilityLabel: 'Enviar',
    modelNotLoaded: 'Modelo no cargado. Por favor, inicialice el modelo.',
    loadingModel: 'Cargando modelo...',
    typeYourMessage: 'Escriba su mensaje aquí',
    conversationReset: '¡Conversación reiniciada!',
    networkError: 'Error de red. Inténtalo de nuevo.',
    goToModels: 'Ir a Modelos',
    readyToChat: '¿Listo para chatear? Cargue el último modelo usado.',
    pleaseLoadModel: 'Por favor, cargue un modelo para comenzar a chatear.',
    shortMemoryWarning: 'Advertencia de memoria',
    memoryWarning:
      'Advertencia: El tamaño del modelo está cerca de o excede la memoria total de su dispositivo ({{totalMemory}} GB). Esto puede causar comportamientos inesperados como rendimiento lento o inestabilidad del sistema.',
    load: 'Cargar',
    cancel: 'Cancelar',
    download: 'Descargar',
    offload: 'Descargar',
    reset: 'Reiniciar',
    delete: 'Eliminar',
    dismiss: 'Descartar',
    replace: 'Reemplazar',
    keepBoth: 'Mantener ambos',
    fileAlreadyExists: 'Archivo ya existe',
    fileAlreadyExistsMessage:
      'Un archivo con este nombre ya existe. ¿Qué te gustaría hacer?',
    addLocalModel: 'Agregar modelo local',
    localModel: 'Modelo local',
    resetModels: 'Reiniciar modelos',
    downloaded: 'Descargado',
    grouped: 'Agrupado',
    proceedWithReset: 'Proceder con Reiniciar',
    confirmReset: 'Confirmar Reiniciar',
    modelSettingsTitle: 'Configuración del modelo',
    autoOffloadLoad: 'Auto Offload/Load',
    autoOffloadLoadDescription:
      'Descargar modelo cuando la app está en segundo plano.',
    metal: 'Metal',
    metalDescription: 'API de hardware acelerada por Apple.',
    layersOnGPU: 'Capas en GPU: {{gpuLayers}}',
    contextSize: 'Tamaño del contexto',
    contextSizePlaceholder:
      'Ingrese el tamaño del contexto (mínimo {{minContextSize}})',
    invalidContextSizeError:
      'Por favor, ingrese un número válido (mínimo {{minContextSize}})',
    modelReloadNotice:
      'Se requiere recargar el modelo para que los cambios surtan efecto.',
    autoNavigateToChat: 'Navegar automáticamente a la conversación',
    autoNavigateToChatDescription:
      'Navegar a la conversación cuando comience a cargar.',
    uiSettingsTitle: 'Configuración de la interfaz de usuario',
    darkMode: 'Modo oscuro',
    darkModeDescription: 'Alternar modo oscuro on/off.',
    displayMemoryUsage: 'Mostrar uso de memoria',
    displayMemoryUsageDescription:
      'Mostrar uso de memoria en la página de chat.',
  },
  ko: {
    attachmentButtonAccessibilityLabel: '미디어 보내기',
    emptyChatPlaceholder: '주고받은 메시지가 없습니다',
    fileButtonAccessibilityLabel: '파일',
    inputPlaceholder: '메시지',
    sendButtonAccessibilityLabel: '보내기',
    modelNotLoaded: '모델이 로드되지 않았습니다. 모델을 초기화하세요.',
    loadingModel: '모델을 로드하는 중...',
    typeYourMessage: '메시지를 입력하세요',
    conversationReset: '대화가 초기화되었습니다!',
    networkError: '네트워크 오류가 발생했습니다. 다시 시도해주세요.',
    goToModels: '모델로 가기',
    readyToChat: '채팅을 준비하세요. 마지막으로 사용된 모델을 로드하세요.',
    pleaseLoadModel: '채팅을 시작하려면 모델을 로드하세요.',
    shortMemoryWarning: '메모리 경고',
    memoryWarning:
      '경고: 모델 크기가 또는 장치의 총 메모리를 초과합니다 ({{totalMemory}} GB). 이는 속도가 느려지거나 시스템 불안정성을 일으킬 수 있는 예기치 않은 동작을 일으켜 초래할 수 있습니다.',
    load: '로드',
    cancel: '취소',
    download: '다운로드',
    offload: '해제',
    reset: '재설정',
    delete: '삭제',
    dismiss: '무시',
    replace: '대체',
    keepBoth: '둘 다 유지',
    fileAlreadyExists: '파일이 이미 존재합니다',
    fileAlreadyExistsMessage:
      '이름이 같은 파일이 이미 존재합니다. 어떻게 하시겠습니까?',
    addLocalModel: '로컬 모델 추가',
    localModel: '로컬 모델',
    resetModels: '모델 재설정',
    downloaded: '다운로드됨',
    grouped: '그룹화됨',
    proceedWithReset: '재설정 진행',
    confirmReset: '재설정 확인',
    modelSettingsTitle: '모델 설정',
    autoOffloadLoad: '자동 해제/로드',
    autoOffloadLoadDescription: '앱이 백그라운드에 있을 때 모델을 해제합니다.',
    metal: 'Metal',
    metalDescription: 'Apple의 하드웨어 가속 API.',
    layersOnGPU: 'GPU의 레이어 수: {{gpuLayers}}',
    contextSize: '컨텍스트 크기',
    contextSizePlaceholder: '컨텍스트 크기 입력 (최소 {{minContextSize}})',
    invalidContextSizeError:
      '유효한 숫자를 입력하세요 (최소 {{minContextSize}})',
    modelReloadNotice: '변경 사항이 적용되도록 모델을 다시 로드해야 합니다.',
    autoNavigateToChat: '자동으로 채팅으로 이동',
    autoNavigateToChatDescription: '로드가 시작될 때 채팅으로 이동합니다.',
    uiSettingsTitle: '사용자 인터페이스 설정',
    darkMode: '어두운 모드',
    darkModeDescription: '어두운 모드를 켜거나 끕니다.',
    displayMemoryUsage: '메모리 사용량 표시',
    displayMemoryUsageDescription:
      '채팅 페이지에서 메모리 사용량을 표시합니다.',
  },
  pl: {
    attachmentButtonAccessibilityLabel: 'Wyślij multimedia',
    emptyChatPlaceholder: 'Tu jeszcze nie ma wiadomości',
    fileButtonAccessibilityLabel: 'Plik',
    inputPlaceholder: 'Napisz wiadomość',
    sendButtonAccessibilityLabel: 'Wyślij',
    modelNotLoaded: 'Model nie załadowany. Proszę załadować model.',
    loadingModel: 'Ładowanie modelu...',
    typeYourMessage: 'Napisz swoją wiadomość tutaj',
    conversationReset: 'Konwersacja została zresetowana!',
    networkError: 'Błąd sieci. Spróbuj ponownie.',
    goToModels: 'Przejdź do modeli',
    readyToChat: 'Czy gotowy do rozmowy? Załaduj ostatnio używany model.',
    pleaseLoadModel: 'Proszę załadować model, aby rozpocząć rozmowę.',
    shortMemoryWarning: 'Ostrzeżenie o pamięci',
    memoryWarning:
      'Ostrzeżenie: Rozmiar modelu jest bliski lub przekracza całkowitą pamięć swojego urządzenia ({{totalMemory}} GB). To może spowodować nieoczekiwane zachowanie, takie jak wolne wydajność lub niestabilność systemu.',
    load: 'Załaduj',
    cancel: 'Anuluj',
    download: 'Pobierz',
    offload: 'Odpowiedz',
    reset: 'Resetuj',
    delete: 'Usuń',
    dismiss: 'Odrzuć',
    replace: 'Zastąp',
    keepBoth: 'Zachowaj oba',
    fileAlreadyExists: 'Plik już istnieje',
    fileAlreadyExistsMessage:
      'Plik o tej samej nazwie już istnieje. Co chciałbyś zrobić?',
    addLocalModel: 'Dodaj model lokalny',
    localModel: 'Model lokalny',
    resetModels: 'Zresetuj modele',
    downloaded: 'Pobrany',
    grouped: 'Zgrupowany',
    proceedWithReset: 'Proceder con Reiniciar',
    confirmReset: 'Potwierdź Reiniciację',
    modelSettingsTitle: 'Konfiguracja modelu',
    autoOffloadLoad: 'Auto Offload/Load',
    autoOffloadLoadDescription: 'Odpowiedz modelu, gdy aplikacja jest w tle.',
    metal: 'Metal',
    metalDescription: 'API sprzętu akcelerowanego przez Apple.',
    layersOnGPU: 'Warstwy w GPU: {{gpuLayers}}',
    contextSize: 'Rozmiar kontekstu',
    contextSizePlaceholder: 'Wpisz rozmiar kontekstu (min {{minContextSize}})',
    invalidContextSizeError: 'Wpisz poprawny numer (min {{minContextSize}})',
    modelReloadNotice:
      'Należy ponownie załadować model, aby zmiany zaczęły obowiązywać.',
    autoNavigateToChat: 'Automatycznie przejdź do konwersacji',
    autoNavigateToChatDescription:
      'Przejdź do konwersacji, gdy rozpocznie się ładowanie.',
    uiSettingsTitle: 'Ustawienia interfejsu użytkownika',
    darkMode: 'Ciemny tryb',
    darkModeDescription: 'Włącz lub wyłącz tryb ciemny.',
    displayMemoryUsage: 'Pokaż użycie pamięci',
    displayMemoryUsageDescription: 'Pokaż użycie pamięci na stronie czatu.',
  },
  pt: {
    attachmentButtonAccessibilityLabel: 'Envia mídia',
    emptyChatPlaceholder: 'Ainda não há mensagens aqui',
    fileButtonAccessibilityLabel: 'Arquivo',
    inputPlaceholder: 'Mensagem',
    sendButtonAccessibilityLabel: 'Enviar',
    modelNotLoaded: 'Modelo não carregado. Por favor, inicialize o modelo.',
    loadingModel: 'Carregando modelo...',
    typeYourMessage: 'Digite sua mensagem aqui',
    conversationReset: 'Conversa reiniciada!',
    networkError: 'Erro de rede. Tente novamente.',
    goToModels: 'Ir para Modelos',
    readyToChat: 'Pronto para conversar? Carregue o último modelo usado.',
    pleaseLoadModel: 'Por favor, carregue um modelo para começar a conversar.',
    shortMemoryWarning: 'Advertência de memória',
    memoryWarning:
      'Advertência: O tamanho do modelo está próximo ou excede a memória total do seu dispositivo ({{totalMemory}} GB). Isso pode causar comportamentos inesperados como desempenho lento ou instabilidade do sistema.',
    load: 'Carregar',
    cancel: 'Cancelar',
    download: 'Baixar',
    offload: 'Descarregar',
    reset: 'Reiniciar',
    delete: 'Deletar',
    dismiss: 'Descartar',
    replace: 'Zastąp',
    keepBoth: 'Zachowaj oba',
    fileAlreadyExists: 'Plik już istnieje',
    fileAlreadyExistsMessage:
      'Plik o tej samej nazwie już istnieje. Co chciałbyś zrobić?',
    addLocalModel: 'Dodaj model lokalny',
    localModel: 'Model lokalny',
    resetModels: 'Zresetuj modele',
    downloaded: 'Pobrany',
    grouped: 'Zgrupowany',
    proceedWithReset: 'Proceder con Reiniciar',
    confirmReset: 'Potwierdź Reiniciację',
    modelSettingsTitle: 'Konfiguracja modelu',
    autoOffloadLoad: 'Auto Offload/Load',
    autoOffloadLoadDescription: 'Odpowiedz modelu, gdy aplikacja jest w tle.',
    metal: 'Metal',
    metalDescription: 'API sprzętu akcelerowanego przez Apple.',
    layersOnGPU: 'Warstwy w GPU: {{gpuLayers}}',
    contextSize: 'Rozmiar kontekstu',
    contextSizePlaceholder: 'Wpisz rozmiar kontekstu (min {{minContextSize}})',
    invalidContextSizeError: 'Wpisz poprawny numer (min {{minContextSize}})',
    modelReloadNotice:
      'Należy ponownie załadować model, aby zmiany zaczęły obowiązywać.',
    autoNavigateToChat: 'Automatycznie przejdź do konwersacji',
    autoNavigateToChatDescription:
      'Przejdź do konwersacji, gdy rozpocznie się ładowanie.',
    uiSettingsTitle: 'Ustawienia interfejsu użytkownika',
    darkMode: 'Ciemny tryb',
    darkModeDescription: 'Włącz lub wyłącz tryb ciemny.',
    displayMemoryUsage: 'Pokaż użycie pamięci',
    displayMemoryUsageDescription: 'Pokaż użycie pamięci na stronie czatu.',
  },
  ru: {
    attachmentButtonAccessibilityLabel: 'Отправить медиа',
    emptyChatPlaceholder: 'Пока что у вас нет сообщений',
    fileButtonAccessibilityLabel: 'Файл',
    inputPlaceholder: 'Сообщение',
    sendButtonAccessibilityLabel: 'Отправить',
    modelNotLoaded: 'Модель не загружена. Пожалуйста, инициализируйте модель.',
    loadingModel: 'Загрузка модели...',
    typeYourMessage: 'Введите ваше сообщение здесь',
    conversationReset: 'Конверсация была сброшена!',
    networkError: 'Ошибка сети. Пожалуйста, попробуйте снова.',
    goToModels: 'Перейти к моделям',
    readyToChat: 'Готовы к общению? Загрузите последний используемый модель.',
    pleaseLoadModel: 'Пожалуйста, загрузите модель, чтобы начать общение.',
    shortMemoryWarning: 'Предупреждение о памяти',
    memoryWarning:
      'Предупреждение: Размер модели близок или превышает общую память вашего устройства ({{totalMemory}} GB). Это может привести к непредвиденным поведением, таким как медленная производительность или нестабильность системы.',
    load: 'Загрузить',
    cancel: 'Отменить',
    download: 'Скачать',
    offload: 'Отменить',
    reset: 'Сбросить',
    delete: 'Удалить',
    dismiss: 'Отменить',
    replace: 'Заменить',
    keepBoth: 'Оставить оба',
    fileAlreadyExists: 'Файл уже существует',
    fileAlreadyExistsMessage:
      'Файл с таким названием уже существует. Что вы хотите сделать?',
    addLocalModel: 'Добавить локальную модель',
    localModel: 'Локальная модель',
    resetModels: 'Сбросить модели',
    downloaded: 'Скачано',
    grouped: 'Сгруппировано',
    proceedWithReset: 'Продолжить сброс',
    confirmReset: 'Подтвердить сброс',
    modelSettingsTitle: 'Конфигурация модели',
    autoOffloadLoad: 'Автоматическое выгрузка/загрузка',
    autoOffloadLoadDescription:
      'Выгрузить модель, когда приложение находится в фоне.',
    metal: 'Metal',
    metalDescription: 'API оборудования, ускоренного Apple.',
    layersOnGPU: 'Слои в GPU: {{gpuLayers}}',
    contextSize: 'Размер контекста',
    contextSizePlaceholder:
      'Введите размер контекста (минимум {{minContextSize}})',
    invalidContextSizeError:
      'Введите правильный номер (минимум {{minContextSize}})',
    modelReloadNotice:
      'Необходимо перезагрузить модель, чтобы изменения вступили в силу.',
    autoNavigateToChat: 'Автоматически перейти к конверсации',
    autoNavigateToChatDescription:
      'Перейти к конверсации, когда начнется загрузка.',
    uiSettingsTitle: 'Настройки пользовательского интерфейса',
    darkMode: 'Темный режим',
    darkModeDescription: 'Включить или выключить темный режим.',
    displayMemoryUsage: 'Показать использование памяти',
    displayMemoryUsageDescription:
      'Показать использование памяти на странице чата.',
  },
  tr: {
    attachmentButtonAccessibilityLabel: 'Medya gönder',
    emptyChatPlaceholder: 'Henüz mesaj yok',
    fileButtonAccessibilityLabel: 'Dosya',
    inputPlaceholder: 'Mesaj yazın',
    sendButtonAccessibilityLabel: 'Gönder',
    modelNotLoaded: 'Model yüklenmedi. Modeli başlatın.',
    loadingModel: 'Model yükleniyor...',
    typeYourMessage: 'Mesajınızı buraya yazın',
    conversationReset: 'Konuşma sıfırlandı!',
    networkError: 'Ağ hatası. Lütfen tekrar deneyin.',
    goToModels: 'Modellere git',
    readyToChat: 'Sohbete hazır mısınız? Son kullanılan modeli yükleyin.',
    pleaseLoadModel: 'Lütfen bir model yükleyin, sohbete başlamak için.',
    shortMemoryWarning: 'Hafıza Uyarısı',
    memoryWarning:
      'Uyarı: Model boyutu cihazınızın toplam hafızasına yakın veya onu aşıyor ({{totalMemory}} GB). Bu, beklenmedik davranışlar, örneğin yavaş performans veya sistem istikrarının oluşmasına neden olabilir.',
    load: 'Yükle',
    cancel: 'İptal',
    download: 'İndir',
    offload: 'Aç',
    reset: 'Sıfırla',
    delete: 'Sil',
    dismiss: 'Kapat',
    replace: 'Değiştir',
    keepBoth: 'Her ikisini de koru',
    fileAlreadyExists: 'Dosya zaten var',
    fileAlreadyExistsMessage:
      'Bu ada sahip bir dosya zaten var. Ne yapmak istiyorsunuz?',
    addLocalModel: 'Yerel modeli ekle',
    localModel: 'Yerel model',
    resetModels: 'Modelleri sıfırla',
    downloaded: 'Pobrany',
    grouped: 'Zgrupowany',
    proceedWithReset: 'Proceder con Reiniciar',
    confirmReset: 'Potwierdź Reiniciację',
    modelSettingsTitle: 'Konfiguracja modelu',
    autoOffloadLoad: 'Auto Offload/Load',
    autoOffloadLoadDescription: 'Odpowiedz modelu, gdy aplikacja jest w tle.',
    metal: 'Metal',
    metalDescription: 'API sprzętu akcelerowanego przez Apple.',
    layersOnGPU: 'Warstwy w GPU: {{gpuLayers}}',
    contextSize: 'Rozmiar kontekstu',
    contextSizePlaceholder: 'Wpisz rozmiar kontekstu (min {{minContextSize}})',
    invalidContextSizeError: 'Wpisz poprawny numer (min {{minContextSize}})',
    modelReloadNotice:
      'Należy ponownie załadować model, aby zmiany zaczęły obowiązywać.',
    autoNavigateToChat: 'Automatycznie przejdź do konwersacji',
    autoNavigateToChatDescription:
      'Przejdź do konwersacji, gdy rozpocznie się ładowanie.',
    uiSettingsTitle: 'Ustawienia interfejsu użytkownika',
    darkMode: 'Ciemny tryb',
    darkModeDescription: 'Włącz lub wyłącz tryb ciemny.',
    displayMemoryUsage: 'Pokaż użycie pamięci',
    displayMemoryUsageDescription: 'Pokaż użycie pamięci na stronie czatu.',
  },
  uk: {
    attachmentButtonAccessibilityLabel: 'Надіслати медіа',
    emptyChatPlaceholder: 'Повідомлень ще немає',
    fileButtonAccessibilityLabel: 'Файл',
    inputPlaceholder: 'Повідомлення',
    sendButtonAccessibilityLabel: 'Надіслати',
    modelNotLoaded: 'Модель не загружена. Пожалуйста, инициализируйте модель.',
    loadingModel: 'Загрузка модели...',
    typeYourMessage: 'Введите ваше сообщение здесь',
    conversationReset: 'Конверсация была сброшена!',
    networkError: 'Ошибка сети. Пожалуйста, попробуйте снова.',
    goToModels: 'Перейти к моделям',
    readyToChat: 'Готовы к общению? Загрузите последний используемый модель.',
    pleaseLoadModel: 'Пожалуйста, загрузите модель, чтобы начать общение.',
    shortMemoryWarning: 'Предупреждение о памяти',
    memoryWarning:
      'Предупреждение: Размер модели близок или превышает общую память вашего устройства ({{totalMemory}} GB). Это может привести к непредвиденным поведением, таким как медленная производительность или нестабильность системы.',
    load: 'Загрузить',
    cancel: 'Отменить',
    download: 'Скачать',
    offload: 'Отменить',
    reset: 'Сбросить',
    delete: 'Удалить',
    dismiss: 'Отменить',
    replace: 'Заменить',
    keepBoth: 'Оставить оба',
    fileAlreadyExists: 'Файл уже существует',
    fileAlreadyExistsMessage:
      'Файл с таким названием уже существует. Что вы хотите сделать?',
    addLocalModel: 'Добавить локальную модель',
    localModel: 'Локальная модель',
    resetModels: 'Сбросить модели',
    downloaded: 'Скачано',
    grouped: 'Сгруппировано',
    proceedWithReset: 'Продолжить сброс',
    confirmReset: 'Подтвердить сброс',
    modelSettingsTitle: 'Конфигурация модели',
    autoOffloadLoad: 'Автоматическое выгрузка/загрузка',
    autoOffloadLoadDescription:
      'Выгрузить модель, когда приложение находится в фоне.',
    metal: 'Metal',
    metalDescription: 'API оборудования, ускоренного Apple.',
    layersOnGPU: 'Слои в GPU: {{gpuLayers}}',
    contextSize: 'Размер контекста',
    contextSizePlaceholder:
      'Введите размер контекста (минимум {{minContextSize}})',
    invalidContextSizeError:
      'Введите правильный номер (минимум {{minContextSize}})',
    modelReloadNotice:
      'Необходимо перезагрузить модель, чтобы изменения вступили в силу.',
    autoNavigateToChat: 'Автоматически перейти к конверсации',
    autoNavigateToChatDescription:
      'Перейти к конверсации, когда начнется загрузка.',
    uiSettingsTitle: 'Настройки пользовательского интерфейса',
    darkMode: 'Темный режим',
    darkModeDescription: 'Включить или выключить темный режим.',
    displayMemoryUsage: 'Показать использование памяти',
    displayMemoryUsageDescription:
      'Показать использование памяти на странице чата.',
  },
};
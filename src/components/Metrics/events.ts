const events = {
  activity_stream: {
    event: {
      objects: [
        "ARCHIVE_FROM_POCKET",
        "BLOCK",
        "BOOKMARK_ADD",
        "BOOKMARK_DELETE",
        "CLICK",
        "CLICK_PRIVACY_INFO",
        "CLOSE_NEWTAB_PREFS",
        "DELETE",
        "DELETE_FROM_POCKET",
        "DELETE_CONFIRM",
        "DIALOG_CANCEL",
        "DIALOG_OPEN",
        "DRAG",
        "DROP",
        "MIGRATION_CANCEL",
        "MIGRATION_START",
        "OPEN_NEWTAB_PREFS",
        "OPEN_NEW_WINDOW",
        "OPEN_PRIVATE_WINDOW",
        "PIN",
        "PREVIEW_REQUEST",
        "SAVE_TO_POCKET",
        "SEARCH",
        "SEARCH_EDIT_ADD",
        "SEARCH_EDIT_CLOSE",
        "SEARCH_EDIT_DELETE",
        "SEARCH_HANDOFF",
        "SHOW_PRIVACY_INFO",
        "SKIPPED_SIGNIN",
        "SUBMIT_EMAIL",
        "DISCLAIMER_ACKED",
        "MENU_ADD_SEARCH",
        "MENU_ADD_TOPSITE",
        "MENU_COLLAPSE",
        "MENU_EXPAND",
        "MENU_MANAGE",
        "MENU_MOVE_DOWN",
        "MENU_MOVE_UP",
        "MENU_PRIVACY_NOTICE",
        "MENU_REMOVE",
        "TOP_SITES_EDIT",
        "TOP_SITES_EDIT_CLOSE",
        "UNPIN",
      ],
      release_channel_collection: "opt-out",
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "This is recorded with every user interaction on Activity Stream elements.\n",
      bug_numbers: [1429497, 1429489, 1514732],
      notification_emails: [
        "najiang@mozilla.com",
        "msamuel@mozilla.com",
        "rrosario@mozilla.com",
      ],
      expiry_version: "never",
      extra_keys: {
        addon_version: "The Activity Stream addon version.",
        session_id:
          "The ID of the Activity Stream session in which the event occurred",
        page: "about:home or about_newtab - the page where the event occurred",
        user_prefs: "An integer representaing a user's A-S settings.",
        action_position: "The index of card receiving interactions.",
      },
    },
    end: {
      objects: ["session"],
      release_channel_collection: "opt-out",
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "This is recorded with every session ended in Activity Stream.\n",
      bug_numbers: [1429497, 1429489],
      notification_emails: ["najiang@mozilla.com", "msamuel@mozilla.com"],
      expiry_version: "never",
      extra_keys: {
        addon_version: "The Activity Stream addon version.",
        session_id:
          "The ID of the Activity Stream session in which the event occurred",
        page: "about:home or about_newtab - the page where the event occurred",
        user_prefs: "An integer representaing a user's A-S settings.",
      },
    },
    enroll: {
      objects: ["preference_study"],
      release_channel_collection: "opt-out",
      description: "Sent when a user gets enrolled in a preference study.\n",
      bug_numbers: [1549784],
      notification_emails: ["najiang@mozilla.com", "edilee@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      expiry_version: "never",
      extra_keys: {
        experimentType:
          'For preference_study recipes, the type of experiment this is ("exp" or "exp-highpop").\n',
        branch:
          "For preference_study recipes, the slug of the branch that was chosen for this client.\n",
      },
    },
  },
  addonsManager: {
    install: {
      description:
        "This events are recorded during the install and update flow for extensions and themes, the value of the event is an install_id shared by the events related to the same install or update flow.\n",
      objects: [
        "extension",
        "theme",
        "locale",
        "dictionary",
        "other",
        "unknown",
      ],
      methods: ["install", "update"],
      extra_keys: {
        addon_id: "A string which identify the extension (when available)",
        download_time: "The number of ms needed to complete the download",
        error:
          "The AddonManager error related to an install or update failure.",
        source:
          'The source that originally triggered the add-on installation, one of "about:addons", "about:debugging", "about:preferences", "amo", "app:profile", "disco", "distribution", "extension", "enterprise-policy", "file-url", "geckoview-app", "gmp-plugin", "internal", "plugin", "rtamo", "sync", "system-addon", "temporary-addon", "unknown".\n',
        method:
          'The method used by the source to install the add-on (included when the source can use more than one, e.g. install events with source "about:addons" may have "install-from-file" or "url" as method), one of "amWebAPI", "drag-and-drop", "installTrigger", "install-from-file", "link", "management-webext-api", "sideload", "url".\n',
        num_strings:
          "The number of permission description strings in the extension permission doorhanger",
        updated_from:
          'Determine if an update has been requested by the user or the application ("app" / "user")',
        step:
          "The current step in the install or update flow:\n  - started, postponed, cancelled, failed, permissions_prompt, completed\n  - site_warning, site_blocked, install_disabled_warning\n  - download_started, download_completed, download_failed\n",
      },
      notification_emails: ["addons-dev-internal@mozilla.com"],
      expiry_version: "85",
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      bug_numbers: [1433335, 1515697, 1523641, 1549770, 1590736, 1630596],
      release_channel_collection: "opt-out",
    },
    manage: {
      description:
        "This events are recorded when an installed add-ons is being disable/enabled/uninstalled, the value of the event is the addon_id (which also allow to correlate multiple events related to each other).\n",
      objects: ["extension", "theme", "locale", "dictionary", "other"],
      methods: ["disable", "enable", "sideload_prompt", "uninstall"],
      extra_keys: {
        source:
          "The source from which the addon has been installed (See extra_keys.source description from addonsManager.install telemetry event definition).\n",
        method:
          'The method used by the source to install the add-on (included when the source can use more than one, e.g. install events with source "about:addons" may have "install-from-file" or "url" as method).\n',
        num_strings:
          "The number of permission description strings in the extension permission doorhanger",
      },
      notification_emails: ["addons-dev-internal@mozilla.com"],
      expiry_version: "85",
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      bug_numbers: [1433335, 1515697, 1523641, 1549770, 1590736, 1630596],
      release_channel_collection: "opt-out",
    },
    link: {
      description:
        "A link method event triggered when a user follows a link. The object is the page that the link is on: aboutAddons or aboutPreferences. The value is where the link goes: about:addons, about:preferences, about:debugging, support (on SUMO) or rating, search, author (on AMO) or homepage (on AMO or elsewhere), discohome (on AMO via a recommended add-on card), discomore (on AMO via discover), disconotice (on SUMO via discover)\n",
      objects: ["aboutAddons", "aboutPreferences", "customize"],
      extra_keys: {
        view: "The view the user was on (discover, list, detail or updates).",
        type:
          "For search: the type of page for this view (especially extension or theme list).",
      },
      notification_emails: ["addons-dev-internal@mozilla.com"],
      expiry_version: "85",
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      bug_numbers: [1500147, 1546248, 1590736, 1630596],
      release_channel_collection: "opt-out",
    },
    view: {
      description:
        "A view method event is triggered when a user views a page in about:addons. The object is always aboutAddons. The value is the view name: discover, list, updates or detail.\n",
      objects: ["aboutAddons"],
      extra_keys: {
        type:
          'The type of the view, for about:addons views shared between the supported add-on types it is set to an extension type, while for views related to updates it is set to "recent" or "available".\n',
        source: "The source of the installation for an add-on.",
        addonId: "The id of the add-on being acted upon.",
      },
      notification_emails: ["addons-dev-internal@mozilla.com"],
      expiry_version: "85",
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      bug_numbers: [1500147, 1590736, 1630596],
      release_channel_collection: "opt-out",
    },
    action: {
      description:
        'An action method event is triggered when a user performs an action through the UI on an add-on (besides the object "appUpgrade" which is referred to action performed automatically for the user as part of a Firefox upgrade). The object is where in the product the action was performed.\n',
      objects: [
        "aboutAddons",
        "browserAction",
        "customize",
        "pageAction",
        "doorhanger",
        "appUpgrade",
      ],
      extra_keys: {
        action:
          "The action that was performed. Options include disable, enable, uninstall, undo, contribute, preferences, installFromFile, manage, dismiss, checkForUpdates, checkForUpdate, setUpdatePolicy, setAddonUpdate, installFromRecommendation, resetUpdatePolicy, privateBrowsingAllowed and releaseNotes.\n",
        type:
          "For enable, disable, uninstall, undo and installFromRecommendation: the add-on type that is being acted upon.",
        view:
          "The view for the event when object is aboutAddons, or the specific doorhanger when object is doorhanger.\n",
        addonId: "The id of the add-on being acted upon.",
      },
      notification_emails: ["addons-dev-internal@mozilla.com"],
      expiry_version: "85",
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      bug_numbers: [1500147, 1513344, 1529347, 1546248, 1590736, 1630596],
      release_channel_collection: "opt-out",
    },
    report: {
      description:
        "An abuse report submitted by a user for a given extension. The object of the event represent the report entry point, the value is the id of the addon being reported.\n",
      objects: ["amo", "menu", "toolbar_context_menu", "uninstall"],
      extra_keys: {
        addon_type:
          "The type of the add-on being reported (missing on ERROR_ADDON_NOT_FOUND, ERROR_AMODETAILS_NOTFOUND and ERROR_AMODETAILS_FAILURE).\n",
        error_type:
          "AbuseReport Error Type (included in case of submission failures). The error types include ERROR_ABORTED_SUBMIT, ERROR_ADDON_NOT_FOUND, ERROR_CLIENT, ERROR_NETWORK, ERROR_UNKNOWN, ERROR_RECENT_SUBMIT, ERROR_SERVER, ERROR_AMODETAILS_NOTFOUND, ERROR_AMODETAILS_FAILURE.\n",
      },
      notification_emails: ["addons-dev-internal@mozilla.com"],
      expiry_version: "85",
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      bug_numbers: [1544927, 1580561, 1590736, 1630596],
      release_channel_collection: "opt-out",
    },
  },
  form_autocomplete: {
    show: {
      objects: ["logins"],
      bug_numbers: [1619498],
      description:
        "An content form autocomplete popup was shown. Details on the timing and context are provided. The `value` is the number of milliseconds since the autocomplete search started.",
      expiry_version: "never",
      extra_keys: {
        acFieldName:
          'The "field name" token (last one) of the field\'s autocomplete attribute.',
        fieldType: "The `type` property value of the field.",
        generatedPasswo: "The number of generated password rows shown.",
        hadPrevious:
          "Whether the autocomplete results had cached previous results it could use.",
        typeWasPassword: 'Whether the input `type` was ever "password".',
        insecureWarning:
          "The number of insecure login field warning rows shown (should be 0 or 1).",
        login: "The number of login rows shown (without the domain line).",
        loginWithOrigin:
          "The number of login rows shown (with the domain line).",
        loginsFooter: 'The number of "View Saved Logins" footer row shown.',
        stringLength:
          "Length of the text in the field that triggered these results.",
      },
      notification_emails: ["passwords-dev@mozilla.org"],
      products: ["firefox"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
    },
  },
  "extensions.data": {
    migrateResult: {
      objects: ["storageLocal"],
      bug_numbers: [1470213, 1553297, 1590736, 1630596],
      notification_emails: ["addons-dev-internal@mozilla.com"],
      expiry_version: "85",
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      extra_keys: {
        backend: 'The selected backend ("JSONFile" / "IndexedDB").',
        data_migrated: 'The old extension data has been migrated ("y" / "n").',
        error_name:
          'A DOMException error name if any ("OtherError" for unknown errors). The error has been fatal if the `backend` extra key is "JSONFile", otherwise it is a non fatal error which didn\'t prevented the extension from switching to the IndexedDB backend.\n',
        has_jsonfile: 'The extension has a JSONFile ("y" / "n").',
        has_olddata:
          'The extension had some data stored in the JSONFile ("y" / "n").',
      },
      description:
        "These events are sent when an extension is migrating its data to the new IndexedDB backend, the value of this event is the addon id.\n",
    },
    storageLocalError: {
      objects: ["get", "set", "remove", "clear"],
      bug_numbers: [1606903],
      notification_emails: ["addons-dev-internal@mozilla.com"],
      expiry_version: "81",
      products: ["firefox", "geckoview"],
      record_in_processes: ["main", "content"],
      release_channel_collection: "opt-out",
      extra_keys: {
        error_name:
          'A DOMException error name if any ("OtherError" for unknown errors).\n',
      },
      description:
        "These events are collected when an extension triggers an unexpected error while running a storage.local API call (e.g. because of some underlying QuotaManager and/or IndexedDB error), the value of this event is the addon id.\n",
    },
  },
  homepage: {
    preference: {
      objects: ["ignore"],
      release_channel_collection: "opt-out",
      products: ["firefox", "fennec"],
      record_in_processes: ["main"],
      description:
        'This is recorded whenever the homepage preference is either reset due to being on the ignore list, or setting is blocked due to being on the same list. The value field records the reason for the ignore. "saved_reset" for when a saved preference value is reset. "set_blocked" for when the setting was blocked and "set_blocked_extension" for when we know a WebExtension attempting to set it was blocked.\n',
      bug_numbers: [1535049],
      notification_emails: ["mdeboer@mozilla.com", "rharter@mozilla.com"],
      expiry_version: "never",
      extra_keys: {
        webExtensionId: "The identifier of the webextension, if known.",
      },
    },
  },
  navigation: {
    search: {
      objects: [
        "about_home",
        "about_newtab",
        "contextmenu",
        "oneoff",
        "suggestion",
        "alias",
        "enter",
        "searchbar",
        "urlbar",
        "webextension",
      ],
      release_channel_collection: "opt-out",
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        'This is recorded on each search navigation. The value field records the action used to trigger the search:\n  "enter", "oneoff", "suggestion", "alias", null (for contextmenu and webextension)\n',
      bug_numbers: [1316281, 1496764],
      notification_emails: ["mdeboer@mozilla.com", "rharter@mozilla.com"],
      expiry_version: "never",
      extra_keys: {
        engine: "The id of the search engine used.",
      },
    },
  },
  urlbar: {
    engagement: {
      objects: ["click", "enter", "paste_go", "drop_go"],
      release_channel_collection: "opt-out",
      products: ["firefox"],
      record_in_processes: ["main"],
      description:
        'This is recorded on urlbar engagement, that is when the user picks a search result. The value field records the initial interaction type. One of:\n  "typed", "dropped", "pasted", "topsites"\n',
      bug_numbers: [1559136],
      notification_emails: ["rharter@mozilla.com", "fx-search@mozilla.com"],
      expiry_version: "never",
      extra_keys: {
        elapsed: "engagement time in milliseconds.",
        numChars: "number of input characters.",
        selIndex: "index of the selected result in the urlbar panel, or -1.",
        selType:
          'type of the selected result in the urlbar panel. One of:\n  "autofill", "visit", "bookmark", "history", "keyword", "search",\n  "searchsuggestion", "switchtab", "remotetab", "extension", "oneoff",\n  "keywordoffer", "canonized", "tip", "tiphelp", "none"\n',
      },
    },
    abandonment: {
      objects: ["blur"],
      release_channel_collection: "opt-out",
      products: ["firefox"],
      record_in_processes: ["main"],
      description:
        'This is recorded on urlbar search abandon, that is when the user starts an interaction but then blurs the urlbar. The value field records the initial interaction type. One of:\n  "typed", "dropped", "pasted", "topsites"\n',
      bug_numbers: [1559136],
      notification_emails: ["rharter@mozilla.com", "fx-search@mozilla.com"],
      expiry_version: "never",
      extra_keys: {
        elapsed: "abandonement time in milliseconds.",
        numChars: "number of input characters.",
      },
    },
  },
  normandy: {
    enroll: {
      objects: [
        "preference_study",
        "addon_study",
        "preference_rollout",
        "addon_rollout",
      ],
      description:
        "Sent when applying a Normandy recipe of the above types has succeeded.\n",
      extra_keys: {
        experimentType:
          'For preference_study recipes, the type of experiment this is ("exp" or "exp-highpop").\n',
        branch: "The slug of the branch that was chosen for this client.\n",
        addonId:
          "For addon_study recipes, the ID of the addon that was installed.",
        addonVersion:
          "For addon_study recipes, the version of the addon that was installed.",
        enrollmentId:
          "A unique ID for this enrollment that will be included in all related Telemetry.",
      },
      bug_numbers: [1443560],
      notification_emails: ["normandy-notifications@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
    enroll_failed: {
      methods: ["enrollFailed"],
      objects: [
        "addon_study",
        "preference_rollout",
        "preference_study",
        "addon_rollout",
      ],
      description:
        "Sent when applying a Normandy recipe of the above types has failed.\n",
      extra_keys: {
        reason: "An error code describing the failure.",
        preference:
          "For preference_rollout when reason=conflict, the name of the preference that was going to be modified.\n",
        detail:
          "For addon_study and branched_addon study, extra text describing the failure.\n",
        branch: "The branch that failed to enroll.\n",
        addonId: "The ID of the addon for the rollout when reason=conflict.",
        conflictingSlug: "The slug for the conflicting rollout.",
        enrollmentId: "The enrollment ID of the conflicting rollout.",
      },
      bug_numbers: [1443560],
      notification_emails: ["normandy-notifications@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
    update: {
      objects: ["addon_study", "preference_rollout", "addon_rollout"],
      description:
        "This event is fired when a client detects that a recipe of the ahove types has changed on the server, and the new version of the recipe is being applied over an existing, older version previously fetched from the server.\n",
      extra_keys: {
        previousState:
          "For preference_rollout recipes, the state of the rollout that had been applied previously.\n",
        addonId:
          "For addon_study recipes, the ID of the addon that was updated.",
        addonVersion:
          "For addon_study recipes, the version of the addon that was installed.",
        branch: "The branch that was updated.",
        enrollmentId:
          "A unique ID for this enrollment that will be included in all related Telemetry.",
      },
      bug_numbers: [1443560, 1474413],
      notification_emails: ["normandy-notifications@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
    update_failed: {
      methods: ["updateFailed"],
      objects: ["addon_study", "addon_rollout"],
      description:
        "Sent when applying a new version of a Normandy recipe of the above types (over an existing, older version previously fetched from the server) has failed.\n",
      extra_keys: {
        reason: "An error code describing the failure.",
        detail:
          "Extra text describing the failure. Currently only provided for addon_study.\n",
        branch: "The branch that failed to update.",
        enrollmentId:
          "A unique ID for this enrollment that will be included in all related Telemetry.",
      },
      bug_numbers: [1474413],
      notification_emails: ["normandy-notifications@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
    unenroll: {
      objects: [
        "preference_study",
        "addon_study",
        "preference_rollback",
        "addon_rollback",
      ],
      description:
        'Sent when a Normandy recipe of certain types "ends".  N.B. For preference_rollback, this is fired when the recipe is fired (the recipe that "ends" is a corresponding preference_rollout).\n',
      extra_keys: {
        reason: "A code describing the reason why the recipe ended.",
        didResetValue:
          'For preference_study, "true" or "false" according to whether we put the preference back the way it was.\n',
        addonId: "For addon_study, the ID of the addon that ended.",
        addonVersion:
          "For addon_study, the version of the addon for which the recipe ended.",
        branch: "The branch of the experiment that this client was on.",
        enrollmentId:
          "A unique ID for this enrollment that will be included in all related Telemetry.",
      },
      bug_numbers: [1443560],
      notification_emails: ["normandy-notifications@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
    unenroll_failed: {
      methods: ["unenrollFailed"],
      description:
        "Sent when unenrolling a user fails (see the unenroll event).\n",
      objects: ["preference_rollback", "preference_study", "addon_rollback"],
      extra_keys: {
        reason: "A code describing the reason the unenroll failed.",
        enrollmentId:
          "A unique ID for this enrollment that will be included in all related Telemetry.",
      },
      bug_numbers: [1443560],
      notification_emails: ["normandy-notifications@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
    graduate: {
      objects: ["preference_rollout"],
      description:
        "Sent when a preference rollout ends due to the rolled-out preference becoming a new default.\n",
      bug_numbers: [1443560],
      notification_emails: ["normandy-notifications@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        enrollmentId:
          "A unique ID for this enrollment that will be included in all related Telemetry.",
      },
    },
  },
  pwmgr: {
    open_management: {
      objects: [
        "aboutprotections",
        "autocomplete",
        "capturedoorhanger",
        "contextmenu",
        "direct",
        "fxamenu",
        "mainmenu",
        "pageinfo",
        "preferences",
        "snippet",
      ],
      methods: ["open_management"],
      description: "Sent when opening the password management UI.\n",
      bug_numbers: [1543499, 1454733, 1545172, 1550631, 1622971],
      notification_emails: [
        "loines@mozilla.com",
        "passwords-dev@mozilla.org",
        "sfoster@mozilla.com",
      ],
      products: ["firefox"],
      record_in_processes: ["main", "content"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
    reauthenticate: {
      description:
        'Measure how often users are asked to authenticate with their Operating System or Master Password to gain access to stored passwords. Possible values are as follows,\n  "success" should be used when the user authenticates and provides a password or other authentication factor.\n  "success_no_prompt" should be used when the feature is enabled but no prompt is given to the user because they have recently authenticated.\n  "success_disabled" is used when the feature is disabled.\n  "success_unsupported_platform" should be set when the user attempts to authenticate on an unsupported platform.\n  "success_no_password" should be used when the user doesn\'t have an OS password set.\n  "fail" should be used when the user cancels the authentication prompt or an unexpected exception is encountered. The user may or may not have provided an incorrect password before cancelling.\n',
      objects: ["master_password", "os_auth"],
      methods: ["reauthenticate"],
      bug_numbers: [1628029, 1623745],
      expiry_version: "never",
      notification_emails: [
        "loines@mozilla.com",
        "passwords-dev@mozilla.org",
        "jaws@mozilla.com",
      ],
      release_channel_collection: "opt-out",
      products: ["firefox"],
      record_in_processes: ["content"],
    },
    mgmt_interaction: {
      description:
        "These events record interactions on the about:logins page.\n",
      extra_keys: {
        breached:
          "Whether the login is marked as breached or not. If a login is both breached and vulnerable, it will only be reported as breached.\n",
        vulnerable:
          "Whether the login is marked as vulnerable or not. If a login is both breached and vulnerable, it will only be reported as breached.\n",
        sort_key:
          'The key that is used for sorting the login-list. Should only be set with the "sort" method.',
      },
      objects: ["existing_login", "list", "new_login", "password", "username"],
      methods: [
        "cancel",
        "copy",
        "delete",
        "dismiss_breach_alert",
        "edit",
        "filter",
        "hide",
        "learn_more_breach",
        "learn_more_vuln",
        "new",
        "open_site",
        "save",
        "select",
        "show",
        "sort",
      ],
      bug_numbers: [1548463, 1600958, 1549115, 1628165],
      expiry_version: "never",
      notification_emails: [
        "loines@mozilla.com",
        "passwords-dev@mozilla.org",
        "jaws@mozilla.com",
      ],
      release_channel_collection: "opt-out",
      products: ["firefox"],
      record_in_processes: ["content"],
    },
    autocomplete_field: {
      objects: ["generatedpassword"],
      methods: ["autocomplete_field", "autocomplete_shown"],
      description:
        '"autocomplete_field": The first time each unique generated password is used to fill a login field - i.e. the user selects it from from the autocomplete dropdown on a password input "autocomplete_shown": The first time the password generation option is shown in the autocomplete dropdown on a password input for a site per session\n',
      bug_numbers: [1548878, 1616356],
      notification_emails: [
        "loines@mozilla.com",
        "passwords-dev@mozilla.org",
        "sfoster@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
    filled_field_edited: {
      objects: ["generatedpassword"],
      methods: ["filled_field_edited"],
      description:
        "The first time each generated password filled in a website form field is edited by the user in a field it was filled in\n",
      bug_numbers: [1548880],
      notification_emails: ["loines@mozilla.com", "passwords-dev@mozilla.org"],
      products: ["firefox", "thunderbird"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
  },
  fxa: {
    connect: {
      objects: ["account"],
      methods: ["connect", "disconnect"],
      description:
        "Records when a Firefox Account, or a Firefox Account service, is explicitly connected or disconnected from the browser via an intentional user action.\n",
      extra_keys: {
        fxa: "Whether the account itself was connected or disconnected.",
        sync: "Whether sync was connected or disconnected.",
      },
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      bug_numbers: [1595954],
      notification_emails: ["sync-dev@mozilla.org"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
    },
  },
  fxa_avatar_menu: {
    click: {
      objects: [
        "account_settings",
        "cad",
        "login",
        "send_tab",
        "sync_now",
        "sync_settings",
        "sync_tabs",
        "sync_tabs_sidebar",
        "toolbar_icon",
        "unver_sync_settings",
        "open_monitor",
        "open_send",
      ],
      methods: ["click"],
      release_channel_collection: "opt-out",
      products: ["firefox"],
      record_in_processes: ["main"],
      description:
        "This is recorded on interactions with the FxA avatar menu on the toolbar",
      bug_numbers: [1524665, 1585459, 1606203],
      notification_emails: ["vbudhram@mozilla.com", "loines@mozilla.com"],
      expiry_version: "never",
      extra_keys: {
        fxa_status:
          'The current state of the user. Possible states are "not_configured", "unverified", "signedin" and "login_failed".\n',
        fxa_avatar: "Boolean for whether or not account has set an avatar",
      },
    },
  },
  fxa_app_menu: {
    click: {
      objects: [
        "account_settings",
        "cad",
        "login",
        "send_tab",
        "sync_now",
        "sync_settings",
        "sync_tabs",
        "sync_tabs_sidebar",
        "toolbar_icon",
        "unver_sync_settings",
        "open_monitor",
        "open_send",
      ],
      methods: ["click"],
      release_channel_collection: "opt-out",
      products: ["firefox"],
      record_in_processes: ["main"],
      description:
        "This is recorded on interactions with the FxA menu in the app (hamburger) menu",
      bug_numbers: [1542334, 1606203],
      notification_emails: ["vbudhram@mozilla.com", "loines@mozilla.com"],
      expiry_version: "never",
      extra_keys: {
        fxa_status:
          'The current state of the user. Possible states are "not_configured", "unverified", "signedin" and "login_failed".\n',
        fxa_avatar: "Boolean for whether or not account has set an avatar",
      },
    },
  },
  messaging_experiments: {
    reach: {
      objects: [
        "cfr",
        "whats_new_panel",
        "moments_page",
        "snippets",
        "cfr_fxa",
      ],
      methods: ["reach"],
      release_channel_collection: "opt-out",
      products: ["firefox"],
      record_in_processes: ["main"],
      description:
        "This records whether a branch's targeting is satisfied for Messaging System experiments. All qualified branch ID(s) will be recorded in the 'extra_keys' for each active experiment, and the event 'value' will be the experiment ID\n",
      bug_numbers: [1471318],
      notification_emails: ["ujet@mozilla.com"],
      expiry_version: "never",
      extra_keys: {
        branches:
          'A semicolon separated string for all the qualified branch ID(s). e.g. "control;variant_01;treatment_02".\n',
      },
    },
  },
  pocket: {
    save: {
      description:
        "User saved page through one of the following channels: new tab, save to pocket button",
    },
    sign_in: {
      description: "User signed into pocket through FXA or a pocket account.",
    },
  },
  "telemetry.test": {
    test: {
      methods: ["test1", "test2"],
      objects: ["object1", "object2"],
      bug_numbers: [1286606],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      description: "This is a test entry for Telemetry.",
      expiry_version: "never",
      extra_keys: {
        key1: "This is just a test description.",
        key2: "This is another test description.",
      },
    },
    optout: {
      objects: ["object1", "object2"],
      bug_numbers: [1286606],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      release_channel_collection: "opt-out",
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      description: "This is an opt-out test entry.",
      expiry_version: "never",
      extra_keys: {
        key1: "This is just a test description.",
      },
    },
    expired_version: {
      objects: ["object1", "object2"],
      bug_numbers: [1286606],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      description: "This is a test entry with an expired version.",
      expiry_version: "3",
    },
    not_expired_optout: {
      objects: ["object1"],
      bug_numbers: [1286606],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      description:
        "This is an opt-out test entry with unexpired date and version.",
      release_channel_collection: "opt-out",
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      expiry_version: "999",
    },
    main_only: {
      objects: ["object1"],
      bug_numbers: [1313326],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      description: "This event is used to test main-process only recording.",
      expiry_version: "never",
    },
    content_only: {
      objects: ["object1"],
      bug_numbers: [1313326],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["content"],
      description: "This event is used to test content-process only recording.",
      expiry_version: "never",
      extra_keys: {
        foo: "This is just a test description.",
        bar: "And this is another test description.",
      },
    },
    main_and_content: {
      objects: ["object1"],
      bug_numbers: [1313326],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main", "content"],
      description:
        "This event is used to test main and content process recording.",
      expiry_version: "never",
    },
    default_products: {
      objects: ["object1"],
      bug_numbers: [1452552],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      description:
        "This event is used to test default products main recording.",
      expiry_version: "never",
    },
    desktop_only: {
      objects: ["object1"],
      bug_numbers: [1452552],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      record_in_processes: ["main"],
      description: "This event is used to test desktop-only main recording.",
      expiry_version: "never",
      products: ["firefox", "thunderbird"],
    },
    multiproduct: {
      objects: ["object1"],
      bug_numbers: [1452552],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      record_in_processes: ["main"],
      description: "This event is used to test multiproduct main recording.",
      expiry_version: "never",
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
    },
    mobile_only: {
      objects: ["object1"],
      bug_numbers: [1452552],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      record_in_processes: ["main"],
      description: "This event is used to test mobile-only main recording.",
      expiry_version: "never",
      products: ["fennec", "geckoview"],
    },
  },
  "telemetry.test.second": {
    test: {
      objects: ["object1", "object2", "object3"],
      bug_numbers: [1286606],
      notification_emails: ["telemetry-client-dev@mozilla.com"],
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      description: "This is a test entry for Telemetry.",
      expiry_version: "never",
      extra_keys: {
        key1: "This is just a test description.",
      },
    },
  },
  "devtools.main": {
    activate: {
      objects: ["responsive_design", "split_console"],
      bug_numbers: [1455273],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "User activates the responsive_design or split_console in the devtools toolbox.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        host:
          "Toolbox host (positioning): bottom, left, right, window, page or other.",
        width: "Toolbox width rounded up to the nearest 50px.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    add_breakpoint: {
      objects: ["debugger"],
      bug_numbers: [1463123],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has added a breakpoint to a script.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    blackbox: {
      objects: ["debugger"],
      bug_numbers: [1463126],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User clicked the blackbox button to blackbox a script.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    close: {
      objects: ["tools"],
      bug_numbers: [1453312],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User closes devtools toolbox.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        host: "Toolbox host (positioning): bottom, side, window or other.",
        width: "Toolbox width rounded up to the nearest 50px.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    close_adbg: {
      objects: ["aboutdebugging"],
      bug_numbers: [1504173],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User closes about:debugging.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        width: "Toolbox width rounded up to the nearest 50px.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    connection_attempt: {
      objects: ["aboutdebugging"],
      bug_numbers: [1549970],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User is trying to connect to a remote runtime.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        connection_id:
          "Randomly generated id to keep to group various events related to the same connection attempt.",
        connection_type: "Connection type",
        runtime_id:
          "Random id generated to track events related to a single runtime",
        status: "One of (cancelled, failed, not responding, start, success).",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    continue: {
      objects: ["debugger"],
      bug_numbers: [1463122],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has pressed the continue button on a paused script.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    deactivate: {
      objects: ["responsive_design", "split_console"],
      bug_numbers: [1455275],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "User deactivates the responsive_design or split_console in the devtools toolbox.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        host: "Toolbox host (positioning): bottom, side, window or other.",
        width: "Toolbox width rounded up to the nearest 50px.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    device_added: {
      objects: ["aboutdebugging"],
      bug_numbers: [1521507],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "A new device was detected in about:debugging",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        connection_type: "Connection type",
        device_name: "Device name",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    device_removed: {
      objects: ["aboutdebugging"],
      bug_numbers: [1521507],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "A previously listed device was removed in about:debugging",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        connection_type: "Connection type",
        device_name: "Device name",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    edit_html: {
      objects: ["inspector"],
      bug_numbers: [1463080],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "User is editing HTML via the context menu item in the markup view.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        made_changes: "Indicates whether changes were made.",
        time_open: "The amount of time in ms that the HTML editor was open.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    edit_resend: {
      objects: ["netmonitor"],
      bug_numbers: [1463171],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has executed edit / resend in the netmonitor.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id: "The toolbox session start time e.g. 13963.",
      },
    },
    edit_rule: {
      objects: ["ruleview"],
      bug_numbers: [1463081],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "User is editing a CSS rule by clicking on or next to a CSS property, enabling / disabling a rule or creating a new property.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    enter: {
      objects: [
        "accessibility",
        "application",
        "dom",
        "inspector",
        "jsdebugger",
        "memory",
        "netmonitor",
        "options",
        "performance",
        "storage",
        "styleeditor",
        "webconsole",
        "whatsnew",
        "other",
        "fakeTool4242",
        "testBlankPanel",
        "testTool",
        "testtool1",
        "testTool1072208",
        "testtool2",
      ],
      bug_numbers: [1441070],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User opens a tool in the devtools toolbox.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        host: "Toolbox host (positioning): bottom, side, window or other.",
        width: "Toolbox width rounded up to the nearest 50px.",
        message_count: "The number of cached console messages.",
        start_state:
          "debuggerStatement, breakpoint, exception, tab_switch, toolbox_show, initial_panel, toggle_settings_off, toggle_settings_on, key_shortcut, select_next_key, select_prev_key, tool_unloaded, inspect_dom, unknown etc.",
        panel_name: "The name of the panel opened or other",
        cold:
          "Is this the first time the current panel has been opened in this toolbox?",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    execute_js: {
      objects: ["webconsole"],
      bug_numbers: [1463083],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has executed some JS in the Web Console.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        input:
          'Indicates from which input the command was evaluated ("inline" for regular input, "multiline" for editor mode).',
        lines: "The number of lines contained in the command.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    reverse_search: {
      objects: ["webconsole"],
      bug_numbers: [1489489],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "User has toggled, navigated or evaluated expressions from reverse search .",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        functionality:
          "Indicates functionality of reverse search being accessed.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    exit: {
      objects: [
        "accessibility",
        "application",
        "dom",
        "inspector",
        "jsdebugger",
        "memory",
        "netmonitor",
        "options",
        "performance",
        "storage",
        "styleeditor",
        "webconsole",
        "whatsnew",
        "other",
        "fakeTool4242",
        "testBlankPanel",
        "testTool",
        "testtool1",
        "testTool1072208",
        "testtool2",
      ],
      bug_numbers: [1455270],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User closes a tool in the devtools toolbox.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        host: "Toolbox host (positioning): bottom, side, window or other.",
        width: "Toolbox width rounded up to the nearest 50px.",
        next_panel: "The name of the panel closed or other.",
        panel_name: "The name of the panel opened or other",
        reason:
          "debuggerStatement, breakpoint, exception, tab_switch, toolbox_show, initial_panel, toggle_settings_off, toggle_settings_on, key_shortcut, select_next_key, select_prev_key, tool_unloaded, inspect_dom, toolbox_closed, unknown etc.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    f12_enabled: {
      objects: ["tools"],
      bug_numbers: [1630228],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox"],
      record_in_processes: ["main"],
      description:
        "User opened DevTools for the first time, which enables the F12 shortcut.",
      release_channel_collection: "opt-out",
      expiry_version: "80",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    f12_popup_displayed: {
      objects: ["tools"],
      bug_numbers: [1630228],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox"],
      record_in_processes: ["main"],
      description:
        'User triggered the "enable devtools" notification after pressing F12.',
      release_channel_collection: "opt-out",
      expiry_version: "80",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    filters_changed: {
      objects: ["netmonitor", "webconsole"],
      bug_numbers: [1463144, 1463095],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has changed filters in the web console.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        trigger:
          "The cause of the filter change: error, warn, log, info, debug, css, netxhr, net, text or reset and all, html, css, js, xhr, fonts, images, media, ws or other for netmonitor",
        active: "Comma separated list of active filters.",
        inactive: "Comma separated list of inactive filters.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    inspect: {
      objects: ["aboutdebugging"],
      bug_numbers: [1504173],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "User has clicked on the inspect button of one of the debug targets of aboutdebugging.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        runtime_type: "The runtime type",
        target_type: "The target type",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    jump_to_definition: {
      objects: ["webconsole"],
      bug_numbers: [1463101],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        'User has clicked "Jump to definition" icon (next to logged functions) in the web console.',
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    jump_to_source: {
      objects: ["webconsole"],
      bug_numbers: [1463092],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "User has clicked a link to a source file in the web console.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    object_expanded: {
      objects: ["webconsole"],
      bug_numbers: [1463104],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has expanded an object in the web console.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    open: {
      objects: ["tools"],
      bug_numbers: [1416024, 1456984],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User opens devtools toolbox.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        entrypoint:
          "How was the toolbox opened? CommandLine, ContextMenu, HamburgerMenu, KeyShortcut, SessionRestore or SystemMenu",
        first_panel: "The name of the first panel opened.",
        host: "Toolbox host (positioning): bottom, side, window or other.",
        splitconsole: "Indicates whether the split console was open.",
        width: "Toolbox width rounded up to the nearest 50px.",
        shortcut:
          "The key combination pressed. Used only in the case that entrypoint === KeyShortcut.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    open_adbg: {
      objects: ["aboutdebugging"],
      bug_numbers: [1504173],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User opens about:debugging.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        width: "Toolbox width rounded up to the nearest 50px.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    pause_on_exceptions: {
      objects: ["debugger"],
      bug_numbers: [1463117],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has changed pausing behaviour in the debugger.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        exceptions: "Pause on exceptions is checked.",
        caught_exceptio: "Pause on caught exceptions is checked.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    pause: {
      objects: ["debugger"],
      bug_numbers: [1463118],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "Debugger has paused in a script due to a breakpoint or exception.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        reason:
          "caught-exception, uncaught-exception, pausing, debugger-statement or breakpoint.",
        lib_stacks:
          "Number of collapsed callstacks in the call tree. These are call stacks that are part of external libraries e.g. react, which are collapsed  by default.",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    persist_changed: {
      objects: ["netmonitor", "webconsole"],
      bug_numbers: [1531395, 1542312],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has changed log persist status.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    pretty_print: {
      objects: ["debugger"],
      bug_numbers: [1463125],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "User clicked the pretty print button to pretty print a script.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    remove_breakpoint: {
      objects: ["debugger"],
      bug_numbers: [1463124],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has removed a breakpoint from a script.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    runtime_added: {
      objects: ["aboutdebugging"],
      bug_numbers: [1521507],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "A new remote runtime has been detected in about:debugging",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        connection_type: "Connection type",
        device_name:
          "Name of the device on which the runtime is running (optional)",
        runtime_id:
          "Random id generated to track events related to a single runtime",
        runtime_name: "Name of the runtime",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    runtime_connected: {
      objects: ["aboutdebugging"],
      bug_numbers: [1521507, 1530997],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "Connection was established with a remote runtime in about:debugging",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        connection_type: "Connection type",
        device_name:
          "Name of the device on which the runtime is running (optional)",
        runtime_id:
          "Random id generated to track events related to a single runtime",
        runtime_name: "Name of the runtime",
        runtime_os:
          "Operating system on which the runtime is running (eg Android or Linux)",
        runtime_version: "Version of the runtime (eg 67.0a1)",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    runtime_disconnected: {
      objects: ["aboutdebugging"],
      bug_numbers: [1521507],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "Connection was lost with a remote runtime in about debugging",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        connection_type: "Connection type",
        device_name:
          "Name of the device on which the runtime is running (optional)",
        runtime_id:
          "Random id generated to track events related to a single runtime",
        runtime_name: "Name of the runtime",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    runtime_removed: {
      objects: ["aboutdebugging"],
      bug_numbers: [1521507],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "A previously listed runtime was removed in about:debugging",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        connection_type: "Connection type",
        device_name:
          "Name of the device on which the runtime is running (optional)",
        runtime_id:
          "Random id generated to track events related to a single runtime",
        runtime_name: "Name of the runtime",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    select_page: {
      objects: ["aboutdebugging"],
      bug_numbers: [1504173],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        "User navigates to a new page of an application such as about:debugging",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        page_type:
          "Type of page the user navigates to (this-firefox, connect, runtime)",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    show_profiler: {
      objects: ["aboutdebugging"],
      bug_numbers: [1521511],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        'User has clicked on the "Open Profiler" button in a runtime page of about:debugging',
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        runtime_id:
          "Random id generated to track events related to a single runtime",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    select_ws_frame: {
      objects: ["netmonitor"],
      bug_numbers: [1555638],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has selected a WebSocket frame.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    sidepanel_changed: {
      objects: ["inspector", "netmonitor"],
      bug_numbers: [1463083, 1463169],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has switched sidepanel tabs.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        oldpanel: "The panel the user is switching from",
        newpanel: "The panel the user is switching to",
        os:
          'The OS name and version e.g. "Linux 4.4.0-1014-aws", "Darwin 14.5.0", "Windows_NT 6.1.7601" or "Windows_NT 10.0.15063." This can be used to make sense of data when a feature is only available from a particular operating system build number.',
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    throttle_changed: {
      objects: ["netmonitor"],
      bug_numbers: [1463147],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "User has changed the throttle setting in the netmonitor.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        mode:
          "No throttling, GPRS, Regular 2G, Good 2G, Regular 3G, Good 3G, Regular 4G / LTE, DSL or WI-FI.",
        session_id: "The toolbox session start time e.g. 13963.",
      },
    },
    tool_timer: {
      objects: [
        "animationinspector",
        "computedview",
        "changesview",
        "fontinspector",
        "layoutview",
        "ruleview",
      ],
      bug_numbers: [1483817],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description: "The amount of time a tool was opened for.",
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        time_open: "Time open.",
        os:
          'The OS name and version e.g. "Linux 4.4.0-1014-aws", "Darwin 14.5.0", "Windows_NT 6.1.7601" or "Windows_NT 10.0.15063." This can be used to make sense of data when a feature is only available from a particular operating system build number.',
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
    update_conn_prompt: {
      objects: ["aboutdebugging"],
      bug_numbers: [1521511],
      notification_emails: [
        "dev-developer-tools@lists.mozilla.org",
        "hkirschner@mozilla.com",
      ],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      description:
        'User has clicked on the "Enable/Disable connection prompt" button in a runtime page of about:debugging',
      release_channel_collection: "opt-out",
      expiry_version: "never",
      extra_keys: {
        prompt_enabled: "True if the user enables the prompt, false otherwise.",
        runtime_id:
          "Random id generated to track events related to a single runtime",
        session_id:
          "The start time of the session in milliseconds since epoch (Unix Timestamp) e.g. 1396381378123.",
      },
    },
  },
  "security.ui.protections": {
    show: {
      objects: ["protection_report"],
      bug_numbers: [1557050, 1610897],
      description: "User arrived on the protection report.\n",
      expiry_version: "80",
      record_in_processes: ["content"],
      release_channel_collection: "opt-out",
      notification_emails: [
        "ewright@mozilla.com",
        "chsiang@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      products: ["firefox"],
      extra_keys: {
        category:
          "The category of protections the user is in, standard, strict or custom.",
      },
    },
    close: {
      objects: ["protection_report"],
      bug_numbers: [1557050, 1610897, 1612091],
      description: "User closed on the protection report.\n",
      expiry_version: "80",
      record_in_processes: ["content"],
      release_channel_collection: "opt-out",
      notification_emails: [
        "ewright@mozilla.com",
        "chsiang@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      products: ["firefox"],
      extra_keys: {
        category:
          "The category of protections the user is in, standard, strict or custom.",
      },
    },
    click: {
      bug_numbers: [1557050, 1572825, 1610897, 1612088, 1612091],
      description:
        "User interaction by click events on the protection report.\n",
      objects: [
        "lw_app_link",
        "lw_open_button",
        "lw_sync_link",
        "lw_about_link",
        "lw_open_breach_link",
        "mtr_report_link",
        "mtr_about_link",
        "mtr_signup_button",
        "trackers_about_link",
        "mobile_app_link",
      ],
      expiry_version: "80",
      record_in_processes: ["content"],
      release_channel_collection: "opt-out",
      notification_emails: [
        "ewright@mozilla.com",
        "chsiang@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      products: ["firefox"],
      extra_keys: {
        category:
          "The category of protections the user is in, standard, strict or custom.",
      },
    },
  },
  "security.ui.app_menu": {
    click: {
      bug_numbers: [1603545, 1616229],
      description: "Privacy and Security click events on app menu.\n",
      objects: ["open_full_report"],
      expiry_version: "80",
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      notification_emails: [
        "chsiang@mozilla.com",
        "ewright@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      products: ["firefox"],
    },
  },
  "security.ui.protectionspopup": {
    open: {
      objects: ["protections_popup"],
      bug_numbers: [1560327, 1607488],
      description: "How many times the protections panel was opened.\n",
      expiry_version: "80",
      notification_emails: [
        "ewright@mozilla.com",
        "nhnt11@mozilla.com",
        "jhofmann@mozilla.com",
        "chsiang@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      release_channel_collection: "opt-out",
      record_in_processes: ["main"],
      products: ["firefox"],
    },
    click: {
      objects: [
        "etp_toggle_on",
        "etp_toggle_off",
        "sitenotworking_link",
        "send_report_link",
        "send_report_submit",
        "social",
        "cookies",
        "trackers",
        "fingerprinters",
        "cryptominers",
        "subview_settings",
        "settings",
        "full_report",
        "milestone_message",
      ],
      bug_numbers: [1560327, 1602015, 1607488],
      description:
        "User interaction by click events in the protections panel.\n",
      expiry_version: "80",
      notification_emails: [
        "ewright@mozilla.com",
        "nhnt11@mozilla.com",
        "jhofmann@mozilla.com",
        "chsiang@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      release_channel_collection: "opt-out",
      record_in_processes: ["main"],
      products: ["firefox"],
    },
  },
  "uptake.remotecontent.result": {
    uptake: {
      description:
        "Was the remote content successfully pulled? This uptake telemetry allows to monitor the behaviour of our clients when it comes to fetching data from remote servers. This helps defect-detection and allow observation of the proportion of success among clients and sources, the distribution of error causes, and its evolution over time.\n",
      methods: ["uptake"],
      objects: ["remotesettings", "normandy"],
      extra_keys: {
        source:
          "A label to distinguish what is being pulled or updated in the component (eg. recipe id, settings collection name, ...).\n",
        trigger:
          'A label to distinguish what triggered the polling/fetching of remote content (eg. "broadcast", "timer", "forced", "manual")\n',
        age:
          "The age of pulled data in seconds (ie. difference between publication time and fetch time).\n",
        duration:
          "The duration of the synchronization process in milliseconds.\n",
        timestamp: "The current timestamp, received during synchronization.\n",
        errorName:
          "An optional string with the error name attribute in case of failure.\n",
      },
      bug_numbers: [1517469, 1617133],
      products: ["firefox", "fennec", "geckoview", "thunderbird"],
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      expiry_version: "never",
      notification_emails: [
        "mleplatre@mozilla.com",
        "bens-directs@mozilla.com",
      ],
    },
  },
  "intl.ui.browserLanguage": {
    action: {
      description:
        "User interactions for the browser language within about-preferences in the main pane and in the browser language dialog. Each dialog event (on the dialog object, and the manage and search methods of the main object) has a value which is a monotonically increasing number that links it with other events related to the same dialog instance.\n",
      objects: ["dialog", "main"],
      methods: [
        "manage",
        "search",
        "add",
        "remove",
        "reorder",
        "apply",
        "accept",
        "cancel",
      ],
      extra_keys: {
        installId: "The id for an install.",
      },
      products: ["firefox"],
      expiry_version: "85",
      notification_emails: ["flod@mozilla.com", "mstriemer@mozilla.com"],
      release_channel_collection: "opt-out",
      record_in_processes: ["main"],
      bug_numbers: [1486507, 1553311, 1607501],
    },
  },
  security: {
    evalUsage: {
      objects: ["systemContext", "parentProcess"],
      bug_numbers: [1567623],
      description:
        "eval() (or an eval()-like method) was called while running in the System Principal context or the Parent Process. Expected values are:\n  chromeuri - chrome:// file\n  resourceuri - resource:// file\n  datauri - a data URI\n  bloburi - a blob URI\n  singlestring - A single file or string with no slashes\n  mozillaextension - An extension claiming to be from *mozilla.org\n  otherextension - Another extension not from Mozilla\n  suspectedUserChromeJS - A filepath ending in .uc.js\n  sanitizedWindowsPath - A filepath, on Windows, sanitized by WinUtils::PreparePathForTelemetry\n                         which is a bare filename or a subpath of %ProgramFiles%, %SystemRoot%,\n                         or %TEMP%\n  sanitizedWindowsURL - A partial URL, on Windows, consisting of either file://../ followed by\n                        the value prepared as for sanitizedWindowsPath, or the bare scheme of\n                        the original url\n  other - Unknown\n  other-on-worker - We cannot do a regex; it is not a chrome, resource, data, or blob uri, but\n                    could be any other.\n  regexfailure - Our Regex Matching code threw an error\nThe fileinfo key may contain additional information about the file that caused the eval() depending on the above value. Resource, Chrome, and SingleString will contain the full value. Extensions will contain the full value; however .xpi! will be shortened to !, shield.mozilla.org! to s! and mozilla.org! to m!.  Data, Blob, UserChromeJS, Other, and Regexfailure should have no value.\n",
      notification_emails: ["tom@mozilla.com", "ckerschb@mozilla.com"],
      release_channel_collection: "opt-out",
      products: ["firefox"],
      expiry_version: "77",
      record_in_processes: ["all"],
      extra_keys: {
        fileinfo: "Information about the file that triggered eval",
      },
    },
    javascriptLoad: {
      objects: ["parentProcess"],
      bug_numbers: [1582512],
      description:
        "The javascript engine requested to load a filename that was not allowed. Expected values, and fileinfo key, are the same possible values as above in 'evalUsage'\n",
      notification_emails: ["tom@mozilla.com", "gijs@mozilla.com"],
      release_channel_collection: "opt-out",
      products: ["firefox"],
      expiry_version: "77",
      record_in_processes: ["main"],
      extra_keys: {
        fileinfo:
          "Information about the filename that was requested to be loaded",
      },
    },
  },
  pictureinpicture: {
    create: {
      objects: ["player"],
      description:
        "Recorded when the Picture-in-Picture player window is created.\n",
      extra_keys: {
        width: "The width that the window was created at",
        height: "The height that the window was created at",
        screenX: "The screen X coordinate that the window was created at",
        screenY: "The screen Y coordinate that the window was created at",
      },
      notification_emails: ["mconley@mozilla.com", "astevenson@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      bug_numbers: [1560590],
      expiry_version: "78",
      release_channel_collection: "opt-out",
    },
    resize: {
      objects: ["player"],
      description:
        "Recorded when the Picture-in-Picture player window is resized.\n",
      extra_keys: {
        width: "The width that the window was resized to",
        height: "The height that the window was resize to",
      },
      notification_emails: ["mconley@mozilla.com", "astevenson@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      bug_numbers: [1560590],
      expiry_version: "78",
      release_channel_collection: "opt-out",
    },
    move: {
      objects: ["player"],
      description:
        "Recorded when the Picture-in-Picture player window is moved.\n",
      extra_keys: {
        screenX: "The screen X coordinate that the window was moved to",
        screenY: "The screen Y coordinate that the window was moved to",
      },
      notification_emails: ["mconley@mozilla.com", "astevenson@mozilla.com"],
      products: ["firefox", "fennec", "geckoview"],
      record_in_processes: ["main"],
      bug_numbers: [1560590],
      expiry_version: "78",
      release_channel_collection: "opt-out",
    },
  },
  "security.doh.trrPerformance": {
    resolved: {
      objects: ["record"],
      bug_numbers: [1613790],
      description: "How long it took to resolve a test domain using TRR.\n",
      expiry_version: "80",
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      notification_emails: [
        "nhnt11@mozilla.com",
        "ddamjanovic@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      products: ["firefox"],
      extra_keys: {
        domain: "The resolved domain.",
        trr: "The TRR provider used.",
        time: "The network time for the resolution.",
        status: "The DNS status code.",
        retryCount: "The number of lookup attempts before success.",
        networkUnstable:
          "Whether there was network fluctuation while gathering the results.",
        captivePortal:
          "Whether there a captive portal was detected during the run.",
      },
    },
    trrselect: {
      objects: ["dryrunresult"],
      bug_numbers: [1631822],
      description:
        "The URL of the DoH provider chosen by the TRR selection dry-run\n",
      expiry_version: "80",
      record_in_processes: ["main"],
      release_channel_collection: "opt-out",
      notification_emails: [
        "nhnt11@mozilla.com",
        "ddamjanovic@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      products: ["firefox"],
    },
  },
  "security.ui.certerror": {
    load: {
      objects: ["aboutcerterror"],
      bug_numbers: [1484255, 1505310, 1553181, 1629826],
      description:
        "The about:certerror page is loaded, keyed by error code, see https://searchfox.org/mozilla-central/source/security/nss/lib/mozpkix/include/pkix/Result.h\n",
      expiry_version: "never",
      notification_emails: [
        "jhofmann@mozilla.com",
        "rtestard@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      release_channel_collection: "opt-out",
      record_in_processes: ["content"],
      products: ["firefox"],
      extra_keys: {
        is_frame: "If the error page is loaded in an iframe.",
        has_sts:
          "If the error page is for a site with HSTS headers or with a pinned key.",
      },
    },
    click: {
      objects: [
        "advanced_button",
        "exception_button",
        "return_button_top",
        "return_button_adv",
        "learn_more_link",
        "auto_report_cb",
        "error_code_link",
        "clipboard_button_top",
        "clipboard_button_bot",
      ],
      bug_numbers: [1484255, 1505310, 1553181, 1629826],
      description:
        "User interaction by click events on the cert error page. Keyed by error code, see https://searchfox.org/mozilla-central/source/security/nss/lib/mozpkix/include/pkix/Result.h\n",
      expiry_version: "never",
      notification_emails: [
        "jhofmann@mozilla.com",
        "rtestard@mozilla.com",
        "seceng-telemetry@mozilla.com",
      ],
      release_channel_collection: "opt-out",
      record_in_processes: ["content"],
      products: ["firefox"],
      extra_keys: {
        is_frame: "If the error page is loaded in an iframe.",
        has_sts:
          "If the error page is for a site with HSTS headers or with a pinned key.",
        panel_open:
          "If the advanced panel was open at the time of the interaction.",
      },
    },
  },
};

export default Object.entries(events).map(([groupName, options]) => ({
  label: groupName,
  options: Object.entries(options).map(([eventName, details]) => ({
    label: `${groupName}.${eventName}`,
    value: eventName,
    description: details.description,
  })),
}));

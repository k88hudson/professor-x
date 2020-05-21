export default `- id: RECOMMEND_PICTURE_IN_PICTURE_CFR
enabled: true
arguments:
slug: bug-1635199-message-recommend-picture-in-picture-cfr-beta-77-77
branches:
- slug: n4s_pip_control
ratio: 50
value: {}
groups:
  - cfr
- slug: n4s_pip_cfr
ratio: 50
groups:
  - cfr
value:
  id: N4S_PIP_CFR_MESSSAGE
  content:
    bucket_id: N4S_PIP_CFR_MESSSAGE
    buttons:
      primary:
        action:
          data:
            args: https://support.mozilla.org/kb/about-picture-picture-firefox
            where: tabshifted
          type: OPEN_URL
        label:
          value: Learn More
          attributes:
            accesskey: L
      secondary:
        - action:
            type: CANCEL
          label:
            string_id: cfr-doorhanger-extension-cancel-button
        - label:
            string_id: cfr-doorhanger-extension-never-show-recommendation
        - action:
            data:
              category: general-cfrfeatures
            type: OPEN_PREFERENCES_PAGE
          label:
            string_id: cfr-doorhanger-extension-manage-settings-button
    category: cfrFeatures
    heading_text: Multitask with Picture-in-Picture
    icon: chrome://global/skin/media/pictureinpicture.svg
    info_icon:
      label:
        string_id: cfr-doorhanger-extension-sumo-link
      sumo_path: extensionrecommendations
    layout: icon_and_message
    notification_text:
      string_id: cfr-doorhanger-extension-notification
    text: Pop video into a floating window to keep watching while you work in other tabs. Hover over any video and select the small blue rectangle that appears.
  frequency:
    lifetime: 3
  targeting: 'true'
  template: cfr_doorhanger
  trigger:
    id: openURL
    params:
      - youtube.com
      - netflix.com
      - vimeo.com
      - twitch.tv
      - dailymotion.com
      - hulu.com
      - ustream.com
      - metacafe.com
      - disneyplus.com
      - www.youtube.com
      - www.netflix.com
      - www.vimeo.com
      - www.twitch.tv
      - www.dailymotion.com
      - www.hulu.com
      - www.ustream.com
      - www.metacafe.com
      - www.disneyplus.com
isHighVolume: false
userFacingName: Recommend Picture-in-Picture CFR
isEnrollmentPaused: false
experimentDocumentUrl: https://experimenter.services.mozilla.com/experiments/recommend-picture-in-picture-cfr/
userFacingDescription: If we introduce PiP via CFR for users visiting video sites frequently, then we will see more adoption of the PiP feature because we have observed the feature is not easily discovered via user research observations.
filter_expression: env.version >= '77.' && env.version < '78.'
targeting: |
locale == 'en-US' && userPrefs.cfrFeatures && firefoxVersion == 77 &&
browserSettings.update.channel == 'beta' &&
'media.videocontrols.picture-in-picture.video-toggle.enabled'|preferenceValue &&
[userId, 'n4s-workweek']|bucketSample(0, 500, 10000)`;

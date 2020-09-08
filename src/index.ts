import { AssistantConfig, AssistantPackage } from '@sketch-hq/sketch-assistant-types'
import CoreAssistant from '@sketch-hq/sketch-core-assistant'

export const config: AssistantConfig = {
  rules: {
    '@sketch-hq/sketch-core-assistant/fills-no-disabled': {
      active: true,
      ruleTitle: 'Fills with values are active (remove or make active)',
    },
    '@sketch-hq/sketch-core-assistant/borders-no-disabled': {
      active: true,
      ruleTitle: 'Borders with values are active (remove or make active)',
    },
    '@sketch-hq/sketch-core-assistant/shadows-no-disabled': {
      active: true,
      ruleTitle: 'Shadows with values are active (remove or make active)',
    },
    '@sketch-hq/sketch-core-assistant/inner-shadows-no-disabled': {
      active: true,
      ruleTitle: 'Inner Shadows with values are active (remove or make active)',
    },
    '@sketch-hq/sketch-core-assistant/groups-no-empty': {
      active: true,
      ruleTitle: 'Groups contain Layers (remove or add content)',
    },
  },
}

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'tidy-assistant-plus',
      rules: [],
      config,
    }
  },
]

export default assistant

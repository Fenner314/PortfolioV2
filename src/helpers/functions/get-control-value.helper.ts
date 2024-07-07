import { Controls } from 'models/controls.interface'

export const getControlValue = (
	controls: Controls
): 'software' | 'music' | 'both' | 'neither' => {
	if (controls.music && controls.software) return 'both'
	if (!controls.music && !controls.software) return 'neither'
	return controls.software ? 'software' : 'music'
}

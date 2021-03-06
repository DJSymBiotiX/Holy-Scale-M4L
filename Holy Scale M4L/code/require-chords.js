// Chords -> Key Played -> Chord
exports.chords = {
	0: [
		[0, 4, 7],				// Triad
		[0, 4, 7, 11],			// Seventh
		[0, 2, 4, 7],			// Add2
		[0, 4, 5, 7],			// Add4
		[0, 4, 7, 9],			// Add6
		[0, 4, 7, 14],			// Add9
		[0, 2, 7],				// Sus2
		[0, 5, 7],				// Sus4
		[0, 2, 7, 11],			// Maj7sus2
		[0, 5, 7, 11]			// Maj7sus4
	],
	1: [
		[0, 3, 7],				// Triad
		[0, 3, 7, 10],			// Seventh
		[0, 2, 3, 7],			// Add2
		[0, 3, 5, 7],			// Add4
		[0, 3, 7, 9],			// Add6
		[0, 3, 7, 14],			// Add9
		[0, 3, 7, 10, 14],		// 9
		[0, 2, 7],				// Sus2
		[0, 5, 7],				// Sus4
		[0, 2, 7, 10],			// 7sus2
		[0, 5, 7, 10]			// 7sus4
	],
	2: [
		[0, 3, 7],				// Triad
		[0, 3, 7, 10],			// Seventh
		[0, 3, 5, 7],			// Add4
		[0, 5, 7],				// Sus4
		[0, 5, 7, 10]			// 7sus4
	],
	3: [
		[0, 4, 7],				// Triad
		[0, 4, 7, 11],			// Seventh
		[0, 2, 4, 7],			// Add2
		[0, 4, 7, 9],			// Add6
		[0, 4, 7, 14],			// Add9
		[0, 2, 7,],				// Sus2
		[0, 2, 7, 11]			// Maj7sus2
	],
	4: [
		[0, 4, 7],				// Triad
		[0, 4, 7, 10],			// Seventh
		[0, 2, 4, 7],			// Add2
		[0, 4, 5, 7],			// Add4
		[0, 4, 7, 9],			// Add6
		[0, 4, 7, 14],			// Add9
		[0, 4, 7, 10, 14],		// 9
		[0, 2, 7],				// Sus2
		[0, 5, 7],				// Sus4
		[0, 2, 7, 10],			// 7sus2
		[0, 5, 7, 10]			// 7sus4
	],
	5: [
		[0, 3, 7],				// Triad
		[0, 3, 7, 10],			// Seventh
		[0, 2, 3, 7],			// Add2
		[0, 3, 5, 7],			// Add4
		[0, 3, 7, 14],			// Add9
		[0, 3, 7, 10, 14],		// 9
		[0, 2, 7],				// Sus2
		[0, 5, 7],				// Sus4
		[0, 2, 7, 10],			// 7sus2
		[0, 5, 7, 10]			// 7sus4
	],
	6: [
		[0, 3, 6],				// Triad
		[0, 3, 6, 10]			// Seventh
	]
};

exports.key_signatures = {
	major: {
		C:  ['C',  'D',  'E',  'F',  'G',  'A',  'B'],
		G:  ['G',  'A',  'B',  'C',  'D',  'E',  'F#'],
		D:  ['D',  'E',  'F#', 'G',  'A',  'B',  'C#'],
		A:  ['A',  'B',  'C#', 'D',  'E',  'F#', 'G#'],
		E:  ['E',  'F#', 'G#', 'A',  'B',  'C#', 'D#'],
		B:  ['B',  'C#', 'D#', 'E',  'F#', 'G#', 'A#'],
		Gb: ['F#', 'G#', 'A#', 'B',  'C#', 'D#', 'F'],
		Db: ['C#', 'D#', 'F',  'F#', 'G#', 'A#', 'C'],
		Ab: ['G#', 'A#', 'C',  'C#', 'D#', 'F',  'G'],
		Eb: ['D#', 'F',  'G',  'G#', 'A#', 'C',  'D'],
		Bb: ['A#', 'C',  'D',  'D#', 'F',  'G',  'A'],
		F:  ['F',  'G',  'A',  'A#', 'C',  'D',  'E']
	},
	minor: {
		A:  ['C',  'D',  'E',  'F',  'G',  'A',  'B'],
		E:  ['G',  'A',  'B',  'C',  'D',  'E',  'F#'],
		B:  ['D',  'E',  'F#', 'G',  'A',  'B',  'C#'],
		Gb: ['A',  'B',  'C#', 'D',  'E',  'F#', 'G#'],
		Db: ['E',  'F#', 'G#', 'A',  'B',  'C#', 'D#'],
		Ab: ['B',  'C#', 'D#', 'E',  'F#', 'G#', 'A#'],
		Eb: ['F#', 'G#', 'A#', 'B',  'C#', 'D#', 'F'],
		Bb: ['C#', 'D#', 'F',  'F#', 'G#', 'A#', 'C'],
		F:  ['G#', 'A#', 'C',  'C#', 'D#', 'F',  'G'],
		C:  ['D#', 'F',  'G',  'G#', 'A#', 'C',  'D'],
		G:  ['A#', 'C',  'D',  'D#', 'F',  'G',  'A'],
		D:  ['F',  'G',  'A',  'A#', 'C',  'D',  'E']
	}
};

exports.key_names = {
	major: {
		C:  ['C',  'D',  'E',  'F',  'G',  'A',  'B'],
		G:  ['G',  'A',  'B',  'C',  'D',  'E',  'F#'],
		D:  ['D',  'E',  'F#', 'G',  'A',  'B',  'C#'],
		A:  ['A',  'B',  'C#', 'D',  'E',  'F#', 'G#'],
		E:  ['E',  'F#', 'G#', 'A',  'B',  'C#', 'D#'],
		B:  ['B',  'C#', 'D#', 'E',  'F#', 'G#', 'A#'],
		Gb: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
		Db: ['Db', 'Eb', 'F',  'Gb', 'Ab', 'Bb', 'C'],
		Ab: ['Ab', 'Bb', 'C',  'Db', 'Eb', 'F',  'G'],
		Eb: ['Eb', 'F',  'G',  'Ab', 'Bb', 'C',  'D'],
		Bb: ['Bb', 'C',  'D',  'Eb', 'F',  'G',  'A'],
		F:  ['F',  'G',  'A',  'Bb', 'C',  'D',  'E']
	},
	minor: {
		A:  ['C',   'D',  'E',  'F',   'G',  'A',  'B'],
		E:  ['G',   'A',  'B',  'C',   'D',  'E',  'F#'],
		B:  ['D',   'E',  'F#', 'G',   'A',  'B',  'C#'],
		Gb: ['Bbb', 'Cb', 'Db', 'Ebb', 'Fb', 'Gb', 'Ab'],
		Db: ['Fb',  'Gb', 'Ab', 'Bbb', 'Cb', 'Db', 'Eb'],
		Ab: ['Cb',  'Db', 'Eb', 'Fb',  'Gb', 'Ab', 'Bb'],
		Eb: ['Gb',  'Ab', 'Bb', 'Cb',  'Db', 'Eb', 'F'],
		Bb: ['Db',  'Eb', 'F',  'Gb',  'Ab', 'Bb', 'C'],
		F:  ['Ab',  'Bb', 'C',  'Db',  'Eb', 'F',  'G'],
		C:  ['Eb',  'F',  'G',  'Ab',  'Bb', 'C',  'D'],
		G:  ['Bb',  'C',  'D',  'Eb',  'F',  'G',  'A'],
		D:  ['F',   'G',  'A',  'Bb',  'C',  'D',  'E']
	}
};
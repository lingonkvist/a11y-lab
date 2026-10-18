# a11y-lab

## Vision

a11y lab is a web app for developers and UX designers to build accessible UI components that pass WCAG 2.2. The user selects a component, such as a button or a card, adjusts its colors, typography, and sizing, and sees which specific criteria pass or fail as they edit.

## Requirements

1. The user can select a component, adding it to the canvas.
2. The user can change the background color of the canvas.
3. The user can change the component's background color.
4. The user can change the component's text color.
5. The user can change the component's font size and weight.
6. The user can see contrast ratio results live (1.4.3, 1.4.6).
7. The user can see non-text contrast results live (1.4.11).
8. The user can see target size results live (2.5.5, 2.5.8).
9. The user can export the component's CSS.

## Installation

a11y lab depends on [form-validation](https://github.com/Fielifia/form-validation), which must be cloned manually into `lib/form-validation`. All other dependencies install via `npm install`.

## Contributing

Bug reports and feature requests are welcome via [GitHub Issues](https://github.com/lingonkvist/a11y-lab/issues).

## License

MIT, see [LICENSE](./LICENSE).

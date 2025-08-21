# Box Shadow Generator

A beautiful, user-friendly web application for generating and copying Flutter box-shadow values. Perfect for developers who want to quickly find and implement the perfect shadow for their projects.

## Features

- 🎨 **Visual Shadow Preview** - See exactly how each shadow looks before using it
- 📋 **One-Click Copy** - Click any shadow card to copy the Flutter to your clipboard
- 🎯 **Curated Collection** - Hand-picked shadows from subtle to dramatic
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** - Built with Next.js for optimal performance
- 🔍 **SEO Optimized** - Discoverable and shareable


## Usage

1. **Browse Shadows** - Scroll through the collection of shadow cards
2. **Preview Effects** - Each card shows a live preview of the shadow
3. **Copy Flutter** - Click any shadow card to copy the Flutter `box-shadow` value
4. **Paste & Use** - Paste the copied value into your Flutter project

## Adding New Shadows

To add new shadow definitions to the collection:

1. Open `src/lib/shadows.ts`
2. Find the `shadows` array
3. Add your new shadow object:

```js
{
    shadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px 0px', 
    credit: "by figma"
}
```

4. The shadow will automatically appear in the grid

## Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

- 🐛 **Report Bugs** - Found an issue? Open a GitHub issue
- 💡 **Suggest Features** - Have an idea? I'd love to hear it
- 🎨 **Add Shadows** - Submit new shadow definitions
- 📝 **Improve Docs** - Help make the documentation better
- 🔧 **Fix Issues** - Browse open issues and submit PRs

### Development Process

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes
4. **Test** your changes locally
5. **Commit** your changes: `git commit -m 'Add amazing feature'`
6. **Push** to your branch: `git push origin feature/amazing-feature`
7. **Open** a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow the existing code formatting
- Add comments for complex logic
- Test your changes before submitting

### Shadow Guidelines

When adding new shadows:
- Ensure good contrast and visibility
- Test on different background colors
- Keep shadow values reasonable (not too extreme)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind Shadcn
- **Typography**: Geist & Manrope fonts
- **Icons**: Lucide React
- **Language**: TypeScript

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you find this tool helpful, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting improvements
- 🔗 Sharing with other developers

---

Made with ❤️ for the developer community

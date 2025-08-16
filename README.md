# JavaScript Calculator

A sleek, responsive web-based calculator built with vanilla JavaScript, HTML5, and CSS3. This calculator provides basic arithmetic operations with a modern dark-themed interface.

## 🚀 Features

- **Basic Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Clear Function**: Reset the calculator with a single click
- **Backspace**: Remove the last entered digit or operator
- **Decimal Support**: Handle decimal numbers for precise calculations
- **Keyboard Support**: Full keyboard navigation support
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with Bootstrap integration and smooth hover effects

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and responsive structure
- **CSS3**: Modern styling with flexbox/grid layouts
- **JavaScript (ES6+)**: Core calculator logic and event handling
- **Bootstrap 5.3.0**: Responsive grid system and button styling
- **CDN Integration**: Bootstrap loaded via CDN for optimal performance

## 📱 Demo

The calculator features a dark-themed interface with:
- Large display area for showing calculations
- Intuitive button layout matching physical calculators
- Hover effects for better user interaction
- Smooth transitions and shadow effects

## 🎯 Usage

### Basic Operations
1. **Numbers**: Click number buttons (0-9) to input values
2. **Operators**: Click +, -, ×, ÷ to perform operations
3. **Equals**: Click "=" to calculate the result
4. **Clear**: Click "C" to reset the calculator
5. **Backspace**: Click "⌫" to remove the last character

### Example Calculations
- `15 + 27 = 42`
- `100 ÷ 4 = 25`
- `12.5 × 8 = 100`

## 🏗️ Project Structure

```
javascript-calculator/
├── index.html          # Main HTML structure
├── script.js           # Calculator logic and functionality
├── style.css           # Custom styling and responsive design
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd javascript-calculator
   ```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser

### Local Development
For development purposes, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then visit http://localhost:8000
```

## 🔧 Code Architecture

### HTML Structure
- Semantic HTML5 elements for accessibility
- Bootstrap grid system for responsive layout
- Proper meta tags for mobile optimization

### JavaScript Logic
- **Event Delegation**: Efficient event handling using event listeners
- **State Management**: Array-based approach for storing calculation history
- **Input Validation**: Prevents invalid operator sequences
- **Error Handling**: Graceful handling of edge cases

### CSS Styling
- Mobile-first responsive design
- CSS Grid and Flexbox for layout
- Custom hover effects and transitions
- Dark theme with high contrast for readability

## 🎨 Customization

### Changing Colors
Modify the CSS variables in `style.css`:
```css
body {
    background-color: #your-color;
}

.calculator {
    background-color: #your-color;
}
```

### Adding New Operations
Extend the calculator by adding new buttons in `index.html` and corresponding logic in `script.js`.

## 🐛 Known Limitations

- No support for complex mathematical functions (sin, cos, log, etc.)
- Limited to basic arithmetic operations
- No parentheses support for order of operations
- Maximum display length depends on screen size

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Bug Reports**: Create an issue with detailed reproduction steps
2. **Feature Requests**: Suggest new calculator features
3. **Code Improvements**: Submit pull requests for optimizations
4. **Documentation**: Help improve this README

### Development Guidelines
- Follow existing code style and conventions
- Test changes across different browsers
- Ensure responsive design works on various screen sizes
- Add comments for complex logic

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Bootstrap team for the responsive framework
- JavaScript community for best practices and patterns
- Calculator UI/UX design inspirations from modern calculator apps

## 📞 Support

For questions, issues, or contributions, please open an issue on the GitHub repository or contact the maintainers.

---

**Happy Calculating!** 🧮

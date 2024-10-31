# ASCII Art Generator 🎨✨

An open-source project to convert images into expressive ASCII art! Created with Python and Streamlit, this app lets you transform images into text-based art right in your browser. This is not just an art generator but a community-driven project that thrives on contributions to evolve with new features and ideas!

## 🌐 What Is ASCII Art?

ASCII art is a form of visual art that uses characters from the ASCII standard (like `#`, `@`, `%`, etc.) to create images. This project turns uploaded images into ASCII art, mapping the visual tones and edges into symbols that capture the essence of the image.

## 🌟 Key Features

- **Image-to-ASCII Conversion**: Transform any image into ASCII art effortlessly.
- **Character Customization**: Choose your preferred ASCII characters to create your art, giving endless creative options.
- **Edge Detection**: Enhance your artwork by highlighting details and edges for better clarity.
- **Real-time Customization**: Adjust settings on the fly and instantly view the effects on your ASCII art.

## 🎮 Try It Out!

Explore the live versions:
- [ASCII Art Generator - Version 1](https://saketh-ascii-art-generator-1.streamlit.app/)
- [ASCII Art Generator - Version 2](https://saketh-ascii-art-generator-2.streamlit.app/)
- [ASCII Art Generator - Version 3](https://saketh-ascii-art-generator-3.streamlit.app/)

No downloads needed—simply upload an image and start generating ASCII art!

## 🛠️ How It Works

The ASCII Art Generator uses:
- **Python** libraries like **Pillow** and **NumPy** for image processing.
- **Streamlit** to create a user-friendly web interface.

### Process Overview:
1. **Convert to Grayscale**: Images are simplified into shades of gray.
2. **Optional Edge Detection**: Highlights edges, making the ASCII art more defined.
3. **Map to ASCII Characters**: Grayscale values map to ASCII characters based on intensity, forming a text-based representation of the original image.

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/sakethyalamanchili/ASCII-Art-Generator.git
   cd ASCII-Art-Generator
   ```
2. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the app locally:
   ```bash
   streamlit run app.py
   ```

## 💡 Open-Source Collaboration

We invite developers, designers, and ASCII art enthusiasts to contribute! Here’s how you can get involved:

- **Feature Requests**: Share your ideas to make this app even better.
- **Bug Fixes**: Help improve stability by squashing bugs.
- **Code Enhancements**: Add optimizations or new features like custom fonts, color ASCII art, or text file output.
  
This project is part of the **ZTM Hacktoberfest Challenge**—perfect for first-time contributors and seasoned developers alike. Feel free to fork the repo, make contributions, and join the ASCII art community!

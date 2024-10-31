# ASCII Art Generator 🎨✨

Transform your images into stunning ASCII art right in your browser with this interactive app built in Python and powered by Streamlit!

## 🌟 Features

- **Image-to-ASCII Conversion**: Upload any image, and watch as it’s transformed into a unique piece of ASCII art!
- **Customizable ASCII Symbols**: Choose which characters to use for creating your art, allowing for endless creative possibilities.
- **Edge Detection Enhancement**: Improve detail by applying edge detection, helping ASCII art capture the essence of complex images.
- **Real-time Adjustments**: Tweak settings and instantly see how they affect your artwork, making the tool highly interactive.

## 🎮 Live Demo

Give it a try:  
Link 1 - [ASCII Art Generator 1](https://saketh-ascii-art-generator-1.streamlit.app/)
Link 2 - [ASCII Art Generator 2](https://saketh-ascii-art-generator-2.streamlit.app/)
No downloads required—simply upload an image and start creating!

## 📂 How It Works

This tool uses Python libraries like **Pillow** for image processing and **Streamlit** for the web interface. Behind the scenes:
1. Images are converted to grayscale for simplicity.
2. Edge detection is optionally applied to emphasize contours.
3. The grayscale values are mapped to ASCII characters based on their intensity, creating a visually captivating effect.

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/sakethyalamanchili/ASCII-Art-Generator-1.git
   cd ascii-art-generator
   ```
2. Install the necessary dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Streamlit app locally:
   ```bash
   streamlit run app.py
   ```

## 👩‍💻 Technologies Used
- **Python** (Pillow, NumPy)
- **Streamlit** (for the web interface)

This project is open-source and welcomes contributions! If you’d like to add a feature or fix a bug, feel free to fork the repo and create a pull request.

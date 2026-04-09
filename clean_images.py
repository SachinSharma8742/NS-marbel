import os
import io
from PIL import Image
from rembg import remove

input_dir = "real"
output_dir = "public/images/processed"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def process_image(filepath, filename):
    try:
        print(f"Processing {filename}...")
        with open(filepath, 'rb') as i:
            input_data = i.read()
        
        # Remove background
        subject = remove(input_data)
        
        # Open with PIL
        img = Image.open(io.BytesIO(subject))
        
        # Upscale by 2x using Lanczos
        new_size = (img.width * 2, img.height * 2)
        # Check PIL version for resampling constant
        resampling_filter = Image.Resampling.LANCZOS if hasattr(Image, 'Resampling') else Image.LANCZOS
        upscaled_img = img.resize(new_size, resampling_filter)
        
        # Save as PNG
        out_name = os.path.splitext(filename)[0] + ".png"
        out_path = os.path.join(output_dir, out_name)
        upscaled_img.save(out_path, format="PNG")
        print(f"Saved {out_name}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

def main():
    if not os.path.exists(input_dir):
        print(f"Input directory {input_dir} not found.")
        return
        
    files = [f for f in os.listdir(input_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    if not files:
        print("No images found to process.")
        return
        
    print(f"Found {len(files)} images to process. This may take a moment. Downloading u2net models may happen on first run.")
    
    for filename in files:
        filepath = os.path.join(input_dir, filename)
        process_image(filepath, filename)

if __name__ == "__main__":
    main()

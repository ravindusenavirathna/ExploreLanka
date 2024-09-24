from icrawler.builtin import GoogleImageCrawler
import os


def download_images(location, limit=100, output_dir='images'):
    """
    Downloads images for a given location using Google Image Search.

    Parameters:
    - location (str): The search query for downloading images.
    - limit (int): Number of images to download.
    - output_dir (str): Root directory to store images.

    Returns:
    - None
    """
    # Replace spaces with underscores for folder naming
    folder_name = location.replace(" ", "_")
    # Full path for output directory
    full_output_dir = os.path.join(output_dir, folder_name)

    # Create the directory if it doesn't exist
    os.makedirs(full_output_dir, exist_ok=True)

    # Initialize the GoogleImageCrawler
    crawler = GoogleImageCrawler(storage={'root_dir': full_output_dir})

    # Start crawling and downloading
    print(
        f"Starting download of {limit} images for '{location}' into '{full_output_dir}'")
    crawler.crawl(keyword=location, max_num=limit)
    print(
        f"Downloaded {limit} images for '{location}' into '{full_output_dir}'")


if __name__ == "__main__":
    # Prompt the user to enter a location
    location = input("Enter the location to download images for: ").strip()

    if not location:
        print("Please enter a valid location.")
    else:
        # Optionally, you can customize the number of images and output directory
        try:
            num_images = int(
                input("Enter the number of images to download (default 100): ") or 100)
        except ValueError:
            print("Invalid number entered. Using default value of 100.")
            num_images = 100

        # Optionally, specify a different output directory
        custom_output_dir = input(
            "Enter the output directory (default 'images'): ").strip() or 'images'

        download_images(location, limit=num_images,
                        output_dir=custom_output_dir)

# C:\Users\ravin\Downloads

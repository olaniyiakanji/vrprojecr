class AirbnbAnalyzer:
    def __init__(self, listings_per_slide=10):
        self.listings_per_slide = listings_per_slide
        self.slides = [[]]

    def add_listing(self, listing):
        current_slide = self.slides[-1]
        if len(current_slide) < self.listings_per_slide:
            current_slide.append(listing)
        else:
            self.slides.append([listing])

    def analyze(self):
        for i, slide in enumerate(self.slides):
            print(f"Slide {i+1}:")
            for listing in slide:
                # Perform analysis on the listing
                print(f"Analyzing listing: {listing}")
            print()

analyzer = AirbnbAnalyzer(listings_per_slide=5)
listings = ["Listing 1", "Listing 2", "Listing 3", "Listing 4", "Listing 5",
            "Listing 6", "Listing 7", "Listing 8", "Listing 9", "Listing 10",
            "Listing 11", "Listing 12", "Listing 13", "Listing 14", "Listing 15"]

for listing in listings:
    analyzer.add_listing(listing)

analyzer.analyze()

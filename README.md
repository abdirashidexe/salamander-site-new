# Description:

This project allows the user to insert a video and a target color (for the moving object). The processor extracts the centroids locations from video frames. This writes -per-frame- CSV summaries for the user that shows the time and coordinates of the targeted moving object.

# How to Use The App:

1. Click the button that leads you to the videos page to select an existing video.

2. Choose the color of the object you're looking to track.

3. Choose a number for the threshold*.

4. Click the button to process the video.

5. Once processed, a download link of your CSV should appear.


*threshold: How similar does a pixel’s color have to be to the color you chose for it to count as part of the object?

Example:
- You click a green pixel on the salamander.
- The threshold = 30.
- Every pixel in the video whose color is within 30 units of that green will be counted as part of your selection.
- Pixels farther away than 30 are ignored.
import cv2
import numpy as np
import subprocess
import time

# Define the image you want to search for
template_path = 'template.png'

# Define the ADB command to simulate a tap
def tap(x, y):
    subprocess.call(['adb', 'shell', 'input', 'tap', str(x), str(y)])

while True:
    # Capture a screenshot using ADB
    subprocess.call(['adb', 'shell', 'screencap', '/sdcard/screenshot.png'])
    subprocess.call(['adb', 'pull', '/sdcard/screenshot.png', 'screenshot.png'])

    # Load the screenshot and template image
    screenshot = cv2.imread('screenshot.png')
    template = cv2.imread(template_path)

    # Use template matching to find the template in the screenshot
    result = cv2.matchTemplate(screenshot, template, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)

    # Set a threshold for template matching
    threshold = 0.8
    if max_val >= threshold:
        # If the template is found, get the coordinates to tap
        w, h = template.shape[:-1]
        x, y = max_loc[0] + w // 2, max_loc[1] + h // 2

        # Simulate a tap at the coordinates
        tap(x, y)

    # Delay before taking the next screenshot
    time.sleep(2)

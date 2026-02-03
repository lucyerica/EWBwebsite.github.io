# EWB Website Quick-Update Guide

Welcome! This walkthrough is meant for teammates who do not live and breathe HTML. Follow the steps below and you will be able to tweak photos, names, and text with confidence. Every change happens inside the `docs/` folder of the website project. You can open the files with any text editor you like—VS Code, Notepad, TextEdit, or whatever is handy.

## General Tips
- **Keep a backup nearby.** Before touching a file, make a copy (for example `contact_backup.html`). If something goes sideways you can instantly roll back.
- **Edit the content, not the structure.** Change the words and image file names, but leave the angle brackets (`< >`) and quotes (`" "`) in place so the page keeps working.
- **Check your work in a browser.** After each round of edits, open the page to make sure it still looks right. Working on your own computer? Double-click `docs/index.html` and navigate to the page you changed.

---

## Update E-Board Names, Roles, and Photos
**You will edit:** `docs/contact.html`

1. **Open the file.** Launch your editor and load `docs/contact.html`.
2. **Find the person you want to change.** Each member is wrapped in a block that begins with `<div class="e-board-member">`. Scroll or use your editor’s find feature (usually `Cmd+F` / `Ctrl+F`) to jump straight to their name.
3. **Swap in the new details.** Inside that block you will see:
   - An image tag like `<img src="images/Barbie Roberts.jpeg" alt="Barbie Roberts">`. Change the file name after `src=` to match the new picture you uploaded to `docs/images/`. If the image lives in a subfolder, include the folder name (for example `images/eboard/new-president.jpg`).
   - Text lines like `<h3>Barbie Roberts</h3>` and `<p>President</p>`. Replace the text between the tags with the updated name or role.
   - The email link, which looks like `<a href="mailto:barb@lehigh.edu">barb@lehigh.edu</a>`. Update both the email address in the `mailto:` section and the visible text so they stay in sync.
4. **Save and review.** Save the file, then open `docs/contact.html` in a browser window. Confirm the right photo appears, the spelling looks good, and the email link opens the correct address.
5. **Rinse and repeat.** Repeat the same steps for every other person you need to update.

**Adding someone new?** Highlight one entire `<div class="e-board-member"> ... </div>` block, copy it, and paste it either above or below an existing member. Update the photo, name, role, and email inside the pasted block. This keeps the layout consistent.

---

## Add New Gallery Photos
**You will edit:** `docs/gallery.html`

1. **Prepare your images.** Save the new photos into the `docs/images/` folder (or into one of its subfolders). Stick with simple file names such as `community-build-01.jpg`; avoid spaces and special symbols.
2. **Open the gallery page.** In your editor, open `docs/gallery.html`.
3. **Locate the carousel you want to update.** Each carousel has a heading (`<h1>...</h1>`) followed by a section that looks like:
   ```html
   <div class="carousel-images">
     <img src="images/aquaponics/IMG_4890.HEIC" alt="Photo 1">
     ...
   </div>
   ```
4. **Add your photos.** Inside that `<div class="carousel-images">`, add a new `<img>` line for each picture. Example:
   ```html
   <img src="images/aquaponics/community-build-01.jpg" alt="Team members installing piping">
   ```
   - `src` tells the browser where the image file lives. Use a relative path starting from `docs/` (so photos in `docs/images/` begin with `images/...`).
   - `alt` should be a plain-language description of what the photo shows. This helps screen-reader users and improves accessibility.
5. **Save and test the carousel.** Save the file, open `docs/gallery.html`, and click through the arrows to be sure your new photos appear in the rotation.

**Creating a whole new carousel?** Copy everything from the heading line (`<h1>...</h1>`) down through the matching closing `</div>` of that carousel. Paste it below the existing carousels, change the heading text, and swap the `<img>` entries for the new photo set.

---

## Update Text on Other Pages
Nearly every page is organized the same way: headings live in `<h1>`, `<h2>`, or `<h3>` tags, and regular paragraphs sit inside `<p>` tags. To make an edit:
1. Open the file (for example `docs/community-initiatives.html`).
2. Find the sentence or paragraph you want to change, being sure to keep the surrounding HTML tags intact.
3. Replace the text, save the file, and refresh the page in your browser to confirm the new wording appears.

If you need to bold something, wrap it in `<strong>Like this</strong>`. For links, use `<a href="https://example.com">Clickable text</a>`.

---

## Replace Navigation Links (Optional)
The navigation bar is repeated on many pages. If you need to add a brand-new link or rename an existing one, it is easiest to update the shared template in `docs/nav.html` first. After changing that file, copy the entire `<nav> ... </nav>` section and paste it into any page that should match. This job is a bit more advanced—only tackle it if you are comfortable with larger copy-and-paste edits and keeping indentation consistent.

---

## Need Help?
Accidents happen! If the page looks broken after an edit:
1. Restore the backup file you made at the start of the process.
2. Reopen the edited file and make sure every new `<div>` or `<img>` has a matching closing tag (`</div>` or `</img>`—though note that `<img>` does **not** need a separate closing tag) and that quotation marks appear in pairs.
3. If you are still stuck, grab someone from the web design team. A second set of eyes can usually untangle the problem quickly.

Thanks for helping keep the site up to date! Reach out any time you want a walkthrough or sanity check before publishing changes.

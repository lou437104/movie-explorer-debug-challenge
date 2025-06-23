# movie-explorer-debug-challenge
# 🎬 Movie Explorer – Debugging Challenge

This project began as a deliberately broken front-end movie search app using the [OMDb API](https://www.omdbapi.com/). The purpose was to simulate a real-world debugging scenario involving multiple layers of front-end issues in **HTML**, **CSS**, and **JavaScript**.

---

## 🛠 Project Overview

The app allows users to:
- Search for a movie by title
- Display the title, poster, year, and IMDb rating
- Clear search results
- Handle API errors gracefully

This functionality was **intentionally broken**, and I debugged it line-by-line, fixing structural, functional, and accessibility issues.

---

## 🐞 What I Debugged

### ✅ HTML Fixes:
- Corrected mismatched tags (e.g. `<h1>` not closed)
- Fixed typos in attributes like `placeholer` → `placeholder`
- Repaired incorrect `meta` tag (`width-device-width` → `width=device-width`)
- Added missing `lang` attribute and improved semantic structure
- Removed broken ARIA reference (`aria-labelledby="movieSearch"` with no matching ID)

### ✅ CSS Fixes:
- Corrected typos like `text-align: cetner;` and `align-item: center`
- Replaced invalid values (e.g. `display: flexbox` → `display: flex`)
- Added missing units (`padding: 40` → `padding: 40px`)
- Added missing semicolons and cleaned up formatting
- Improved button styling for better readability and UX

### ✅ JavaScript Fixes:
- Fixed method typos like `getElementByID` → `getElementById`
- Corrected API fetch issues (missing `.json()`, invalid URL, assignment used instead of comparison)
- Replaced invalid DOM method (`insertAdjacentElement` with a string) with `insertAdjacentHTML`
- Fixed broken logic (`data.Response = "False"` → `=== "False"`)
- Replaced `.toUpper()` with `.toUpperCase()`
- Improved error handling and added default `alt` text for images

---

## 🔍 Skills Practiced

- DOM selection and event handling
- Working with external APIs
- Debugging syntax and logic errors
- CSS layout and styling correction
- Writing meaningful, trackable GitHub Issues
- Commit history management tied to specific bugs

---

## 💬 How I Tracked Progress

Every major bug I found was documented as a **GitHub Issue**, where I explained the problem and referenced the specific lines. I then committed each fix with messages like:

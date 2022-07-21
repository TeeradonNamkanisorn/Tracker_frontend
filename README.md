# App Setup

go to root directory -> npm install

## Launch Backend Server

See README.md in the backend repository

## Starting app

If the data was seeded properly in the backend, when logged in with the test account provided, the records created with the seeder should be seen.

### Creating income records

Click the green box in the nav bar to open a dropdown menu. Click create to navigate to the page.
After having created an income, you can either go to the view page via a link provided in the confirm page. Or return to the creator interface to create another income record.

### Viewing income

Income records can either be viewed in the Homepage (Navbar -> Home) or in the Income View Page (Navbar -> Income -> View) or in the edit page (Navbar -> Income -> Edit).

### Editing Income

Navigate to the edit page by Navbar -> Income -> Edit
To delete an income record, click the **bin icon** in the rightmost area of the table. The click confirm.
To Edit click the **pen icon** in the same area.
Alternatively, income records can be created here as well by **create income record**.

### Creating/Viewing/Editing Expense

Same as income but uses a different Navbar drop down on the right.

### Pagination

Page navigation tab can be seen near the bottom of the screen for every table in the website.
If there are more than 9-10 records that can fit on a page then the data is split into multiple part on different pages.
Click to a different page to view another page of data. The data is sorted from oldest to newest dates.
If there are more than 3 pages, click **next** or **previous** to see diffrent page numbers.

## Home Page

When entering the home page, at first, only records that were created today can be seen. To get every records on a specific date, select a date in the calendar input on the top left then click the orange **Find by date** button.
To get today's records again, click **Find Today's Records**.
To get every record ever created, click the **Get Every Record** in the same top-left area.

In the bottom left corner of the page, net revenue is shown which is the sum of all income records minus all expense records.
To view net expense or net income, click the select tab on the top-right and choose the option you wish.
The summary amount also changes as you pick a different date.

### Note

The timezone for this app is GMT+7.

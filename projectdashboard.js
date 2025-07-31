
        document.addEventListener('DOMContentLoaded', () => {
            console.log('IT Project Dashboard Concept Loaded!');

            // Example of how you might dynamically update a progress bar
            // (though for this static demo, it's set in HTML style attribute)
            const updateProgressBar = (selector, percentage) => {
                const progressBarFill = document.querySelector(selector);
                if (progressBarFill) {
                    progressBarFill.style.width = `${percentage}%`;
                }
            };

            // You could call this if data were fetched dynamically:
            // updateProgressBar('.progress-bar-fill', 75); // Example for budget

            // Add any other interactive elements here if you expand the dashboard
            // For instance, a modal for "New Project Request" or filtering options.
        });
   
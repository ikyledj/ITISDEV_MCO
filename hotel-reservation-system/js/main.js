        // Simple dot carousel functionality
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });

        // Book now functionality
        document.querySelector('.book-now-btn').addEventListener('click', () => {
            alert('Booking functionality would be implemented here!');
        });

        // Amenities button
        document.querySelector('.amenities-button').addEventListener('click', () => {
            alert('Room amenities: Free Wi-Fi, Air Conditioning, TV, Mini Bar, Ocean View, Room Service');
        });
        
        // Date range picker functionality
        window.addEventListener('DOMContentLoaded', () => {
            const checkinInput = document.getElementById('checkin');
            const checkoutInput = document.getElementById('checkout');
            const display = document.getElementById('dateRangeDisplay');
            const picker = document.getElementById('dateRangePicker');

            // Open the first input on click
            picker.addEventListener('click', () => {
            checkinInput.showPicker?.(); // modern
            checkinInput.focus();        // fallback
            });

            // Once check-in selected, move to check-out
            checkinInput.addEventListener('change', () => {
            checkoutInput.showPicker?.();
            checkoutInput.focus();
            });

            // When both are selected, update display
            checkoutInput.addEventListener('change', () => {
            if (checkinInput.value && checkoutInput.value) {
                const format = (dateStr) => {
                const d = new Date(dateStr);
                const dd = String(d.getDate()).padStart(2, '0');
                const mm = String(d.getMonth() + 1).padStart(2, '0');
                const yyyy = d.getFullYear();
                return `${dd}-${mm}-${yyyy}`;
                };
                display.textContent = `${format(checkinInput.value)} - ${format(checkoutInput.value)}`;
                display.style.color = '#617C3C';
                display.style.fontWeight = '700';
            }
            });
        });
        // Room and guest picker functionality
        const pickerButton = document.getElementById('pickerButton');
        const dropdown = document.getElementById('dropdownMenu');
        const pickerText = document.getElementById('pickerText');
        const roomInput = document.getElementById('roomInput');
        const guestInput = document.getElementById('guestInput');

        // Toggle dropdown
        pickerButton.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });

        // Update text
        function updateText() {
            const rooms = roomInput.value;
            const guests = guestInput.value;
            pickerText.textContent = `${rooms} room${rooms > 1 ? 's' : ''}, ${guests} guest${guests > 1 ? 's' : ''}`;
        }

        roomInput.addEventListener('input', updateText);
        guestInput.addEventListener('input', updateText);

        // Hide dropdown on outside click
        document.addEventListener('click', (e) => {
            if (!document.querySelector('.room-guest-picker').contains(e.target)) {
            dropdown.style.display = 'none';
            }
        });



import bookingModel from '../Models/BookingModel.js';

const BookingController = async (req, res) => {
    try {
        const {
            userId,
            name,
            email,
            roomType,
            checkInDate,
            checkOutDate,
            guests
        } = req.body;

        // ✅ DATE VALIDATION
        if (new Date(checkInDate) >= new Date(checkOutDate)) {
            return res.status(400).json({
                success: false,
                message: "Check-out date must be after check-in date"
            });
        }

        // ✅ CHECK ROOM AVAILABILITY
        const existingBooking = await bookingModel.findOne({
            roomType,
            checkInDate: { $lte: new Date(checkOutDate) },
            checkOutDate: { $gte: new Date(checkInDate) }
        });

        if (existingBooking) {
            return res.status(400).json({
                success: false,
                message: "Room already booked for selected dates"
            });
        }

        // ✅ FIX: use bookingModel (NOT Booking)
        const newBooking = new bookingModel({
            userId,
            name,
            email,
            roomType,
            checkInDate: new Date(checkInDate),   // 🔥 convert
            checkOutDate: new Date(checkOutDate), // 🔥 convert
            guests: Number(guests)                // 🔥 convert
        });

        await newBooking.save();

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            booking: newBooking
        });

    } catch (error) {
        console.error("Booking Error:", error); // 🔥 show real error
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export default BookingController;
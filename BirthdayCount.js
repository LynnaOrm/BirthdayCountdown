function Birthday() {
    var daysuntilmybirthday = 60;

    for (var days = daysuntilmybirthday; days >= 0; days--) {
        if (days > 30) {
            console.log(days + "day until my birthday sad face");
        } else if (days <= 30 && days > 5) {
            console.log(days + "days until my birthday!!");
        } else if (days <= 5 && days > 0) {
            console.log(days + "DAYS UNTIL MY BIRTHDAY!!!!!!!!!!!!!!") ;
        } else {
            console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
        }

        
    }

}

Birthday(60);
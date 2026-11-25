// Q4: Special Offer Banner
$(document).ready(function () {
    const $banners = $(".banner");
    let currentBanner = 0;

    // Start with the first banner visible.
    $banners.hide().eq(0).show();

    // Hide all banners; Show restores all banners.
    $("#hideBanners").on("click", function () {
        $banners.hide();
    });

    $("#showBanners").on("click", function () {
        $banners.show();
    });

    // Slide effects are applied to all banners.
    $("#slideUp").on("click", function () {
        $banners.stop(true, true).slideUp();
    });

    $("#slideDown").on("click", function () {
        $banners.stop(true, true).slideDown();
    });

    // Fade effects gradually hide or reveal the banners.
    $("#fadeOut").on("click", function () {
        $banners.stop(true, true).fadeOut(500);
    });

    $("#fadeIn").on("click", function () {
        $banners.stop(true, true).fadeIn(500);
    });

    // Every five seconds, fade out the current banner and fade in the next one.
    // The timer is stored so the browser can keep rotating the offers automatically.
    setInterval(function () {
        const nextBanner = (currentBanner + 1) % $banners.length;

        $banners.eq(currentBanner).stop(true, true).fadeOut(400, function () {
            $banners.eq(nextBanner).stop(true, true).fadeIn(400);
        });

        currentBanner = nextBanner;
    }, 5000);
});

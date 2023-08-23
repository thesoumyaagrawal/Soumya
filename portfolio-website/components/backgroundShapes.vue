<template>
    <div class="background-simple-shapes">
        <div class="simple-shape simple-shape-1">
            <SimpleShapesRingOrange />
        </div>
        <div class="simple-shape simple-shape-2">
            <SimpleShapesRingOrange />
        </div>
        <div class="simple-shape simple-shape-3">
            <SimpleShapesRingOrange />
        </div>
        <div class="simple-shape simple-shape-4">
            <SimpleShapesRingOrange />
        </div>
        <div class="simple-shape simple-shape-5">
            <SimpleShapesRingOrange />
        </div>
        <div class="simple-shape simple-shape-6">
            <SimpleShapesRingOrange />
        </div>
    </div>
</template>
<style scoped>
    .background-simple-shapes {
        z-index: 9999;
        position: relative;
    }

    .simple-shape {
        position: fixed;
    }

    .simple-shape-1 { left: 10%; top: 20%; }
    .simple-shape-2 { left: 30%; top: 40%; }
    .simple-shape-3 { left: 50%; top: 60%; }
    .simple-shape-4 { left: 70%; top: 80%; }
    .simple-shape-5 { left: 90%; top: 100%; }
    .simple-shape-6 { left: 110%; top: 120%; }
</style>

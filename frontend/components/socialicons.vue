<template>
    <div class="wrapper">
        <v-card color="transparent" elevation="0" class="icon-wrapper">
            <div class="my-social-icon">
                <SocialFacebook />
            </div>
            <div class="my-social-icon">
                <SocialInstagram />
            </div>
            <div class="my-social-icon">
                <SocialTwitter />
            </div>
            <div class="my-social-icon">
                <SocialLinkedin />
            </div>
            <div class="my-social-icon">
                <SocialGithub />
            </div>
            <div class="my-social-icon">
                <downloadCVButton />
            </div>
        </v-card>
    </div>
</template>

<style scoped>
.icon-wrapper {
    display: flex;
    align-items: center;
    padding: 0px;
    justify-content: flex-end;
}

.my-social-icon {
    padding: 0 8px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .icon-wrapper {
        justify-content: center;
        flex-wrap: wrap;
    }
    .my-social-icon {
        padding: 8px;
    }
}
</style>

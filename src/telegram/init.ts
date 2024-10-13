import { init, backButton, closingBehavior, miniApp, themeParams, postEvent } from '@telegram-apps/sdk';
import { mockEnv } from './mockEnv';

export default function() {
    // Init the package and actualize all global dependencies.
    mockEnv();
    init();
    miniApp.mount();
    postEvent("web_app_expand");
    themeParams.mount();
    themeParams.bindCssVars();
    miniApp.bindCssVars();

    // Mount the back button component and retrieve its actual
    // state.
    backButton.mount();

    // When a user clicked the back button, go back in the
    // navigation history.
    const off = backButton.onClick(() => {
    off();
    window.history.back();
    });

    closingBehavior.mount();
    closingBehavior.enableConfirmation();

    miniApp.ready();
}

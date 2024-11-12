import { Observable, Frame } from '@nativescript/core';

export class WelcomeViewModel extends Observable {
    constructor() {
        super();
    }

    onStartPlanning() {
        Frame.topmost().navigate({
            moduleName: 'chat-page',
            clearHistory: true
        });
    }

    onGoogleSignIn() {
        // To be implemented
        console.log('Google Sign In tapped');
    }

    onAppleSignIn() {
        // To be implemented
        console.log('Apple Sign In tapped');
    }

    onEmailSignIn() {
        // To be implemented
        console.log('Email Sign In tapped');
    }
}
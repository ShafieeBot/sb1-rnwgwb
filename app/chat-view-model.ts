import { Observable, ObservableArray } from '@nativescript/core';

interface Message {
    text: string;
    isAI: boolean;
}

export class ChatViewModel extends Observable {
    private _messages: ObservableArray<Message>;
    private _messageText: string = '';

    constructor() {
        super();
        this._messages = new ObservableArray<Message>([
            {
                text: "Hi! I'm your AI travel planner. Where would you like to go?",
                isAI: true
            }
        ]);
    }

    get messages(): ObservableArray<Message> {
        return this._messages;
    }

    get messageText(): string {
        return this._messageText;
    }

    set messageText(value: string) {
        if (this._messageText !== value) {
            this._messageText = value;
            this.notifyPropertyChange('messageText', value);
        }
    }

    sendMessage() {
        if (!this.messageText.trim()) return;

        // Add user message
        this._messages.push({
            text: this.messageText,
            isAI: false
        });

        // Simulate AI response
        setTimeout(() => {
            this._messages.push({
                text: "Thanks for sharing! Could you tell me when you're planning to travel and for how long?",
                isAI: true
            });
        }, 1000);

        this.messageText = '';
    }
}
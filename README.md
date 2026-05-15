# LocalStream: React Native CTV Architecture

## Overview

LocalStream is a Connected TV (CTV) application architecture built to deliver video content directly to the living room. Designed as a functional Proof of Concept (PoC), this project explores the unique engineering challenges of the 10-foot UI, focusing on spatial navigation, focus management, and performant video delivery on television screens.

## Engineering & Development Workflow

To simulate a rigorous, remote Agile development environment, this project utilizes an AI-driven workflow. Google Gemini operates as a virtual Product Manager, generating technical requirements and feature tickets. Development is executed in isolated branches and merged via formal GitHub Pull Requests, ensuring clean version control and a professional async development rhythm.

## Technical Architecture

| Category             | Technology                 | Purpose                                                |
| :------------------- | :------------------------- | :----------------------------------------------------- |
| **Core Framework**   | React Native (TVOS) & Expo | Cross-platform UI and TV-specific focus handling       |
| **Language**         | TypeScript                 | Type-safe application development and maintainability  |
| **State Management** | Zustand                    | Lightweight, predictable global state handling         |
| **Data Fetching**    | React Query                | Asynchronous state management and caching              |
| **UI & Animation**   | React Native Reanimated    | High-performance, 60fps animations for TV focus states |
| **Workflow / AI**    | Google Gemini              | Agile ticket generation and AI-assisted development    |

## Core Features

- **Dynamic VOD Interface:** A robust home screen featuring categorized content rows optimized for D-pad navigation.
- **Live Broadcast Integration:** A built-in media player designed for continuous streaming content.
- **Spatial Focus Management:** Custom hook implementations to handle standard remote control inputs and TV focus states seamlessly.
- **Detailed Media Views:** Expanded metadata and interactive states for individual video assets.

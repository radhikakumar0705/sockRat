# sockRat

A full-stack web application with Flask backend, Next.js frontend, and AI-powered Socratic tutoring capabilities.

## Project Overview

sockRat is a platform that combines user authentication and management with an AI Socratic tutor designed to help university students learn programming and computer science concepts through guided questioning rather than direct answers.

## Tech Stack

### Backend
- **Framework**: Flask (Python)
- **Database**: SQLAlchemy ORM
- **Authentication**: JWT-based auth system
- **API**: RESTful endpoints

### Frontend
- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Routing**: App Router with grouped routes
- **UI**: Modern component-based architecture

### AI/ML
- **Model Training**: Unsloth (efficient fine-tuning)
- **Base Model**: Llama 3.2 (3B parameters)
- **Training Method**: QLoRA (4-bit quantization)
- **Dataset**: Custom-generated Socratic dialogues (350 examples)
- **Data Generation**: Ollama (local LLM)

## AI Model Details

### Dataset
- **Size**: 350 examples
- **Format**: JSONL with ChatML formatting
- **Subjects**: Programming, Systems & CS
- **Topics**: 40 topics including:
  - Recursion and call stack
  - Big O notation
  - Dynamic programming
  - Graph algorithms
  - Operating systems concepts
  - Networking fundamentals
  - Database concepts
  - And more...

### Training Approach
- **Method**: QLoRA (Quantized Low-Rank Adaptation)
- **Base Model**: Llama 3.2 3B
- **Quantization**: 4-bit (to fit in 6GB VRAM)
- **Target Hardware**: NVIDIA RTX 3050 (6GB VRAM)

### Tutoring Philosophy
The Socratic tutor follows these principles:
1. Never gives direct answers immediately
2. Asks guiding questions first
3. Provides small hints only when student is clearly stuck (after 2+ attempts)
4. Affirms correct reasoning before building on it
5. Keeps responses concise (one question or hint at a time)
6. Asks follow-up questions to deepen understanding

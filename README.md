
Project Description:
This project is an AI-powered Resume Analyzer chatbot. It allows users to upload or use resume data and then ask questions in natural language. The chatbot understands the meaning of the question and retrieves relevant information from the resume.

Even if the user does not use exact keywords present in the resume, the system can still understand the semantic meaning of the question and return correct answers using vector-based (semantic) search.

For example:
- If the resume says "JWT Authentication" and the user asks "secure login system experience", the chatbot can still understand and return the correct answer.

Key Features:
- AI-powered resume understanding chatbot
- Semantic search (vector-based retrieval)
- Answers questions even without exact keywords
- Natural language interaction with resume data
- Real-time chatbot interface

How it works:
1. Resume data is processed and stored
2. Data is converted into embeddings (semantic vectors)
3. User asks a question in chatbot
4. Question is also converted into embeddings
5. Similar meaning data is retrieved from resume
6. AI generates final answer based on matched context

Tech Stack:
- Frontend: React.js
- Automation & Backend Workflow: n8n
- Vector Search (if needed mention): Qdrant / embeddings-based search
- AI Model: LLM (OpenAI / OpenRouter / Gemini embeddings)

Example Questions:
- What are the skills in this resume?
- Does the candidate have backend experience?
- What projects show authentication experience?
- Does this person have payment integration experience?
- What tools are used for deployment?

Future Improvements:
- Upload PDF resume support
- Multiple resume comparison
- Voice-based chatbot
- Chat history memory
- More accurate AI responses using reranking

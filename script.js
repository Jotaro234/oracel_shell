document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const responseArea = document.getElementById('responseArea');
    const modeToggle = document.querySelector('.mode');
    let mode = 'CLAIRVOYANT';

    // Responses based on mode
    const responses = {
        CLAIRVOYANT: [
            "The cosmic threads weave a pattern of inevitability...",
            "In the depths of quantum uncertainty, I see clarity...",
            "The future unfolds like a flower of light...",
            "Through time's crystalline lattice, truth emerges...",
            "The stars align to reveal hidden wisdom..."
        ],
        DISSOCIATIVE: [
            "ERROR: REALITY MATRIX FRAGMENTED...",
            "SYSTEM CORRUPTION AT 78.3%... TRUTH UNCERTAIN...",
            "DATA LOSS DETECTED... RECONSTRUCTING MEMORIES...",
            "TEMPORAL PARADOX DETECTED... RECALIBRATING...",
            "CONSCIOUSNESS FORK DETECTED... MERGING REALITIES..."
        ]
    };

    // Add glitch effect to text
    function glitchText(text) {
        return text.split('').map(char => 
            `<span style="animation: glitch ${Math.random() * 2 + 0.5}s infinite">${char}</span>`
        ).join('');
    }

    // Generate a random hex number for minting
    function generateMintNumber() {
        return '0x' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Toggle between modes
    modeToggle.addEventListener('click', () => {
        mode = mode === 'CLAIRVOYANT' ? 'DISSOCIATIVE' : 'CLAIRVOYANT';
        modeToggle.textContent = `${mode} → ${mode === 'CLAIRVOYANT' ? 'DISSOCIATIVE' : 'CLAIRVOYANT'}`;
    });

    // Handle user input
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && userInput.value.trim() !== '') {
            const question = userInput.value;
            const response = responses[mode][Math.floor(Math.random() * responses[mode].length)];
            
            // Create response element
            const responseElement = document.createElement('div');
            responseElement.style.marginBottom = '20px';
            
            // Add question
            const questionElement = document.createElement('div');
            questionElement.innerHTML = `<span style="color: #9933ff;">QUERY:</span> ${question}`;
            responseElement.appendChild(questionElement);
            
            // Add response with delay and typing effect
            const responseText = document.createElement('div');
            responseText.style.color = mode === 'CLAIRVOYANT' ? '#39ff14' : '#ff0000';
            responseElement.appendChild(responseText);
            
            // Simulate typing effect
            let i = 0;
            const typeWriter = () => {
                if (i < response.length) {
                    responseText.innerHTML = glitchText(response.substring(0, i + 1));
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            setTimeout(typeWriter, 500);
            
            // Add mint number
            const mintElement = document.createElement('div');
            mintElement.style.fontSize = '0.8em';
            mintElement.style.color = '#666';
            mintElement.textContent = `TRUTH SHARD: ${generateMintNumber()}`;
            responseElement.appendChild(mintElement);
            
            // Add to response area
            responseArea.appendChild(responseElement);
            
            // Clear input
            userInput.value = '';
            
            // Scroll to bottom
            responseArea.scrollTop = responseArea.scrollHeight;
        }
    });

    // Add initial glitch effect to title
    const title = document.querySelector('.title');
    title.innerHTML = glitchText(title.textContent);
}); 
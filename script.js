let currentStep = 1;
const totalSteps = 3;
const stepNames = ["Personal Information", "Contact Details", "Course Selection"];

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submitBtn = document.getElementById("submit-btn");
const progressBar = document.getElementById("progress-bar");
const stepText = document.getElementById("step-indicator-text");
const stepNameLabel = document.getElementById("step-name");
const successMsg = document.getElementById("success-msg");

function updateStep() {
    document.querySelectorAll(".step-content").forEach((step) => step.classList.remove("active"));

    document.getElementById(`step-${currentStep}`).classList.add("active");

    const progress = (currentStep / totalSteps) * 100;
    progressBar.style.width = `${progress}%`;

    stepText.innerText = `Step ${currentStep} of ${totalSteps}`;
    stepNameLabel.innerText = stepNames[currentStep - 1];

    if (currentStep === 1) {
        prevBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
    } else if (currentStep === totalSteps) {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
    } else {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
    }
}

nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
        currentStep++;
        updateStep();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateStep();
    }
});

submitBtn.addEventListener("click", () => {
    successMsg.classList.remove("hidden");
    window.scrollTo({
        top: document.getElementById("register").offsetTop - 100,
        behavior: "smooth"
    });
});

updateStep();

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observerInstance.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
    if (!section.classList.contains("animate-fade-in-up")) {
        // observer.observe(section);
    }
});

// Initialize Tom Select for the course dropdown (searchable, clearable)
try {
    if (typeof TomSelect !== 'undefined') {
        new TomSelect('#course', {
            create: false,
            sortField: { field: 'text', direction: 'asc' },
            placeholder: 'Select a course',
            allowEmptyOption: true,
        });
    }
} catch (e) {
    console.warn('TomSelect init failed:', e);
}

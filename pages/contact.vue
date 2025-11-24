<template>
  <div class="min-h-screen bg-gray-50 relative overflow-hidden">
    <!-- Background Wave Pattern - Bottom Left -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="
        background-image: url('/images/about/BGline.svg');
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: auto;
        opacity: 1;
        z-index: 0;
      "
    ></div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-12 flex flex-col items-center">
        <!-- Contact Tag -->
        <div class="flex items-center justify-center mb-4 sm:mb-6">
          <div
            class="flex items-center"
            style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding-top: 4px;
              padding-right: 8px;
              padding-bottom: 4px;
              padding-left: 8px;
              background: #ffffffe5;
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <!-- Lightning Bolt Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3A3AE"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="min-width: 16px; min-height: 16px"
            >
              <path
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            <span
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0%;
                text-align: center;
                color: #1a1925;
              "
            >
              Contact
            </span>
          </div>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-4 text-center w-full"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -0.02em;
            text-align: center;
            vertical-align: middle;
            color: #1a1925;
          "
        >
          Contact
        </h1>

        <!-- Subtitle -->
        <p
          class="text-center w-full"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            text-align: center;
            color: #51515e;
          "
        >
          Get quick answers to any questions that you may have.
        </p>
      </div>

      <!-- Information Cards -->
      <div class="flex justify-center mb-16">
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6"
          style="max-width: 622px"
        >
          <!-- FAQ Card -->
          <div
            class="bg-white p-6 w-full md:w-[200.67px] md:h-[210px] h-auto"
            style="border-radius: 20px; border: 1px solid #eeeef0"
          >
            <div class="flex flex-col h-full">
              <div class="">
                <div
                  class="mb-4 relative"
                  style="padding-top: 4.67px; padding-left: 2.33px"
                >
                  <!-- Icon Background - bgcardicon.svg -->
                  <div
                    class="absolute -top-2 -left-2 w-8 h-8"
                    style="
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: contain;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Reliability Icon -->
                  <img
                    src="/images/about/Icon.svg"
                    alt="Reliability Icon"
                    class="relative z-10"
                    style="height: 20.71px; width: auto; color: #1a1925"
                  />
                </div>
                <h3
                  class="mb-2"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: -0.011em;
                    color: #1a1925;
                  "
                >
                  FAQ
                </h3>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #51515e;
                  "
                >
                  Have questions? Find answers in our frequently asked
                  questions.
                </p>
              </div>
            </div>
          </div>

          <!-- Knowledge Base Card -->
          <div
            class="bg-white p-6 w-full md:w-[200.67px] md:h-[210px] h-auto"
            style="border-radius: 20px; border: 1px solid #eeeef0"
          >
            <div class="flex flex-col h-full">
              <div>
                <div
                  class="mb-4 relative"
                  style="padding-top: 4.67px; padding-left: 2.33px"
                >
                  <!-- Icon Background - bgcardicon.svg -->
                  <div
                    class="absolute -top-2 -left-2 w-8 h-8"
                    style="
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: contain;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Reliability Icon -->
                  <img
                    src="/images/about/Group.svg"
                    alt="Reliability Icon"
                    class="relative z-10"
                    style="height: 20.71px; width: auto; color: #1a1925"
                  />
                </div>
                <h3
                  class="mb-2"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: -0.011em;
                    color: #1a1925;
                  "
                >
                  Knowledge base
                </h3>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #51515e;
                  "
                >
                  Need help? Find guidance in our extensive knowledge base.
                </p>
              </div>
            </div>
          </div>

          <!-- Support Request Card -->
          <div
            class="bg-white p-6 w-full md:w-[200.67px] md:h-[210px] h-auto"
            style="border-radius: 20px; border: 1px solid #eeeef0"
          >
            <div class="flex flex-col h-full">
              <div>
                <div
                  class="mb-4 relative"
                  style="padding-top: 4.67px; padding-left: 2.33px"
                >
                  <!-- Icon Background - bgcardicon.svg -->
                  <div
                    class="absolute -top-2 -left-2 w-8 h-8"
                    style="
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: contain;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Reliability Icon -->
                  <img
                    src="/images/about/Icon3rd.svg"
                    alt="Reliability Icon"
                    class="relative z-10"
                    style="height: 20.71px; width: auto; color: #1a1925"
                  />
                </div>
                <h3
                  class="mb-2"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: -0.011em;
                    color: #1a1925;
                  "
                >
                  Support request
                </h3>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #51515e;
                  "
                >
                  Existing customer? Please open a new support request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="mx-auto contact-form-container" style="margin-bottom: 10%">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name and Email Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Name Field -->
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="John Doe"
                required
                class="contact-input"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="John@gmail.com"
                required
                class="contact-input"
              />
            </div>
          </div>

          <!-- Type Field -->
          <div class="relative">
            <label
              for="type"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Type *
            </label>
            <select
              id="type"
              v-model="form.type"
              required
              class="contact-input contact-select contact-type-select appearance-none pr-10"
            >
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="technical">Technical</option>
            </select>
            <div
              class="absolute right-3 top-[30px] pointer-events-none flex items-center h-[36px]"
            >
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <!-- Message Field -->
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              placeholder="Write your message here..."
              required
              class="contact-textarea"
            ></textarea>
          </div>

          <!-- Privacy Policy Checkbox -->
          <div class="flex items-center space-x-3 pt-2">
            <input
              id="privacy"
              v-model="form.agreeToPrivacy"
              type="checkbox"
              required
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
            />
            <label for="privacy" class="contact-checkbox-label">
              I Agree to the privacy policy
            </label>
          </div>

          <!-- Separator -->
          <hr class="contact-separator" />

          <!-- Acknowledgement Text & Submit Button -->
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2"
          >
            <p class="contact-acknowledgement">
              By submitting, I acknowledge that I have read and agree to the
              <span class="contact-privacy-link">Privacy Policy</span>.
            </p>
            <button type="submit" class="contact-submit-btn flex-shrink-0">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  type: "general",
  message: "",
  agreeToPrivacy: false,
});

const handleSubmit = () => {
  // Handle form submission here
  console.log("Form submitted:", form.value);
  // You can add API call or other logic here
  alert("Thank you for your message! We will get back to you soon.");

  // Reset form
  form.value = {
    name: "",
    email: "",
    type: "general",
    message: "",
    agreeToPrivacy: false,
  };
};
</script>

<style scoped>
/* Contact Form Container */
.contact-form-container {
  max-width: 622px;
  width: 100%;
  background: transparent;
  border-radius: 8px;
}

/* Contact Form Input Fields */
.contact-input {
  width: 100%;
  max-width: 305px;
  height: 36px;
  border-radius: 8px;
  padding: 8px 12px;
  background: #ffffffe5;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #1a1925;
  box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.08),
    0px 1px 1px -0.5px rgba(7, 1, 19, 0.08),
    0px 2px 2px -1px rgba(7, 1, 19, 0.08),
    0px 3px 3px -1.5px rgba(7, 1, 19, 0.08),
    0px 0px 0px 1px rgba(26, 25, 37, 0.08);
  transition: all 0.2s ease;
}

.contact-input:focus {
  box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.08),
    0px 1px 1px -0.5px rgba(7, 1, 19, 0.08),
    0px 2px 2px -1px rgba(7, 1, 19, 0.08),
    0px 3px 3px -1.5px rgba(7, 1, 19, 0.08),
    0px 0px 0px 1px rgba(31, 98, 255, 0.5);
}

/* Select Dropdown - Arrow inside input */
.contact-select {
  padding-right: 40px !important;
  cursor: pointer;
}

/* Type Select - Full width like textarea */
.contact-type-select {
  width: 100% !important;
  max-width: 622px !important;
}

/* Contact Form Textarea */
.contact-textarea {
  width: 100%;
  max-width: 622px;
  height: 128px;
  border-radius: 14px;
  padding: 10px 12px;
  background: #ffffffe5;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #1a1925;
  resize: none;
  box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.08),
    0px 1px 1px -0.5px rgba(7, 1, 19, 0.08),
    0px 2px 2px -1px rgba(7, 1, 19, 0.08),
    0px 3px 3px -1.5px rgba(7, 1, 19, 0.08),
    0px 0px 0px 1px rgba(26, 25, 37, 0.08);
  transition: all 0.2s ease;
}

.contact-textarea:focus {
  box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.08),
    0px 1px 1px -0.5px rgba(7, 1, 19, 0.08),
    0px 2px 2px -1px rgba(7, 1, 19, 0.08),
    0px 3px 3px -1.5px rgba(7, 1, 19, 0.08),
    0px 0px 0px 1px rgba(31, 98, 255, 0.5);
}

/* Submit Button */
.contact-submit-btn {
  width: 72px;
  height: 36px;
  border-radius: 8px;
  padding: 8px 2px;
  background: #1f62ff;
  background-image: linear-gradient(
    180deg,
    rgba(236, 236, 236, 0.08) 0%,
    rgba(85, 85, 85, 0.08) 100%
  );
  border: none;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.006em;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,
    0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,
    0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
    0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset,
    0px 0.25px 0.25px 0px rgba(26, 25, 37, 0.24),
    0px 0.75px 0.75px 0px rgba(26, 25, 37, 0.12),
    0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),
    0px 2px 4px -1px rgba(26, 25, 37, 0.12),
    0px 4px 8px -4px rgba(26, 25, 37, 0.12),
    0px 8px 12px -4px rgba(26, 25, 37, 0.06);
  transition: all 0.2s ease;
}

.contact-submit-btn:hover {
  opacity: 0.9;
}

.contact-submit-btn:active {
  transform: translateY(1px);
}

/* Checkbox Label */
.contact-checkbox-label {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: #51515e;
  cursor: pointer;
}

.contact-checkbox-link {
  color: #51515e;
  text-decoration: underline;
  cursor: pointer;
}

.contact-checkbox-link:hover {
  color: #1f62ff;
}

/* Separator */
.contact-separator {
  border: none;
  border-top: 1px solid #eeeef0;
  margin: 0;
  width: 100%;
}

/* Acknowledgement Text */
.contact-acknowledgement {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: #51515e;
  text-align: left;
}

.contact-privacy-link {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: #1a1925;
  cursor: pointer;
}

.contact-privacy-link:hover {
  color: #1f62ff;
}

/* Responsive Styles */
@media (max-width: 768px) {
  /* Ensure header section is centered on mobile */
  .container .text-center {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
  }

  /* Main Title - Responsive font size */
  h1 {
    font-size: 36px !important;
    line-height: 44px !important;
    text-align: center !important;
  }

  .contact-form-container {
    width: 100%;
    padding: 24px 16px;
  }

  .contact-input {
    max-width: 100%;
  }

  .contact-textarea {
    max-width: 100%;
  }

  .contact-submit-btn {
    width: auto;
    padding: 8px 12px;
  }

  .contact-acknowledgement {
    text-align: center !important;
  }

  .contact-separator {
    margin: 16px 0;
  }
}
</style>

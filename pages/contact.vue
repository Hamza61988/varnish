<template>
  <div class="min-h-screen bg-gray-50 relative overflow-hidden">
    <!-- Background Wave Pattern - Bottom Left -->
    <div class="absolute bottom-0 left-0 w-96 h-96 opacity-5">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
      >
        <path
          d="M0,200 Q100,150 200,200 T400,200 L400,400 L0,400 Z"
          fill="currentColor"
          class="text-gray-600"
        />
      </svg>
    </div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-900 mb-4">Contact</h1>
        <p class="text-lg text-gray-600">
          Get quick answers to any questions that you may have.
        </p>
      </div>

      <!-- Information Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <!-- FAQ Card -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">FAQ</h3>
              <p class="text-sm text-gray-600">
                Have questions? Find answers in our frequently asked questions.
              </p>
            </div>
            <div class="ml-4 flex-shrink-0">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C4.93 16.178 4 14.189 4 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Knowledge Base Card -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Knowledge base</h3>
              <p class="text-sm text-gray-600">
                Need help? Find guidance in our extensive knowledge base.
              </p>
            </div>
            <div class="ml-4 flex-shrink-0">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.944 11.944 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Support Request Card -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Support request</h3>
              <p class="text-sm text-gray-600">
                Existing customer? Please open a new support request.
              </p>
            </div>
            <div class="ml-4 flex-shrink-0">
              <div class="w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name and Email Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="John Doe"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="John@gmail.com"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900"
              />
            </div>
          </div>

          <!-- Type Field -->
          <div class="relative">
            <label for="type" class="block text-sm font-medium text-gray-700 mb-2">
              Type *
            </label>
            <select
              id="type"
              v-model="form.type"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none bg-white pr-10 text-gray-900"
            >
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="technical">Technical</option>
            </select>
            <div class="absolute right-3 top-11 pointer-events-none">
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
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              placeholder="Write your message here..."
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none text-gray-900"
            ></textarea>
          </div>

          <!-- Privacy Policy & Submit -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <div class="flex items-start space-x-3">
              <input
                id="privacy"
                v-model="form.agreeToPrivacy"
                type="checkbox"
                required
                class="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label for="privacy" class="text-sm text-gray-600">
                I Agree to the
                <a href="#" class="text-blue-600 hover:text-blue-700 underline">privacy policy</a>
              </label>
            </div>
            <button
              type="submit"
              class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
            >
              Submit
            </button>
          </div>

          <!-- Acknowledgement Text -->
          <p class="text-xs text-gray-500 text-center sm:text-left pt-2">
            By submitting, I acknowledge that I have read and agree to the
            <a href="#" class="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  type: 'general',
  message: '',
  agreeToPrivacy: false,
})

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', form.value)
  // You can add API call or other logic here
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    type: 'general',
    message: '',
    agreeToPrivacy: false,
  }
}
</script>
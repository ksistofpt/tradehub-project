'use server';

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    sellerId: formData.get('sellerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };

  // Test it out:
  console.log(rawFormData);
}
  
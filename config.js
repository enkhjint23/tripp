// Supabase connection for live sync and notifications (project "Samui Trip", Singapore).
// All three values are safe to publish: the database only answers to people who have the trip's invite link,
// and the notification key is the public half of the pair.
window.TRIP_CONFIG = {
  supabaseUrl: "https://gkixrekjytqdtcwwujez.supabase.co",
  supabaseAnonKey: "sb_publishable_w6bIFIDbkT76S0ZdgPNAng_RyNE_fhS",
  vapidPublicKey: "BN78bZgB30ClLFFyuFE51wvNsnr8-nV0sLKw8rau72pLzt7t79KrjPOvgNMpwrN9_BRlWbF01Xun81wzZe9sJlw"
};

<h1>Welcome to RR!</h1>
<p> we are glad to have you as our new member.. Please click button below to confirm</p>
<a href="{{ route('confirmation', ['token' => $user->confirmation_token]) }}" style="display:inline-block;padding:10px 20px;background-color:#007BFF;color:#fff;text-decoration:none;border-radius:5px;">Confirm Email</a>
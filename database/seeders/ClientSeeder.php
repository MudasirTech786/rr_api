<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Client;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Client::updateOrCreate(['name' => 'April Stone','company' => 'Kisobooka' ]);
        Client::updateOrCreate(['name' => 'Micheal James','company' => 'Transdirect USA' ]);
        Client::updateOrCreate(['name' => 'Thlema','company' => 'INT' ]);
    }
}

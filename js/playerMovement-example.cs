using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SpaceInvaders
{
	public partial class Form1 : Form
	{
		//When the left key is pressed it triggers the movement of the player. 
		bool goleft;
		//When the right key is pressed it triggeres the movement of the player. 
		bool goright;
		//The set speed of the aliens on screen. The integer is their exact movement speed. 
		int speed = 5;
		/*This is the player score, it will go up when the player shoots an alien. 

        The score is 0 as this is the player's starting score.*/
		int score = 0;
		/*This makes it so when the player presses the fire button they can only  

        fire one shot at a time.*/
		bool ispressed;
		//This is the set amount of aliens that will be on the screen. 
		int totalEnemies = 12;
		//This is the player left and right movement speed. 
		int playerSpeed = 6;
		public Form1()
		{
			InitializeComponent();
		}

		private void keyisdown(object sender, KeyEventArgs e)
		{
			if (e.KeyCode == Keys.Left)
			{
				goleft = true;
			}

			if (e.KeyCode == Keys.Right)
			{
				goright = true;
			}

			if (e.KeyCode == Keys.Space && !ispressed)
			{
				ispressed = true;
				makeBullet();
			}
		}

		private void keyisup(object sender, KeyEventArgs e)
		{
			if (e.KeyCode == Keys.Left)
			{
				goleft = false;
			}

			if (e.KeyCode == Keys.Right)
			{
				goright = false;
			}

			//Checks if the player pressing a button is true. 
			if (ispressed)
			{
				ispressed = false;
			}
		}

		private void timer1_Tick(object sender, EventArgs e)
		{
			/*This is checking to see if the go left or right variable is true 

            this is what allows the player to move either left or right.*/
			if (goleft)
			{
				player.Left -= playerSpeed;
			}
			else if (goright)
			{
				player.Left += playerSpeed;
			}

			foreach (Control x in this.Controls)
			{
				if (x is PictureBox && x.Tag == "alien")
				{
					if (((PictureBox)x).Bounds.IntersectsWith(player.Bounds))
					{
						gameOver();
						MessageBox.Show("Game over you lose, select OK to return to the menu");
						var newForm = new Menu();
						newForm.Show();
					}

					//Allows the aliens to move to the right on game start. 
					((PictureBox)x).Left += speed;
					/*Calculates the position of the aliens for when they go 

                     off screen, when the alien reaches this position their 

                     position will be reset.*/
					if (((PictureBox)x).Left > 720)
					{
						((PictureBox)x).Top += ((PictureBox)x).Height + 10;
						((PictureBox)x).Left = -50;
					}
				}
			}

			//End of the aliens moving on the form. 
			//Motion for the bullets  
			foreach (Control y in this.Controls)
			{
				if (y is PictureBox && y.Tag == "bullet")
				{
					//Moves the bullet up by 20 pixels. 
					y.Top -= 20;
					//If the bullet reaches the top of the form. 
					if (((PictureBox)y).Top < this.Height - 490)
					{
						//Delete the bullet. 
						this.Controls.Remove(y);
					}
				}
			}

			//Bullet and alien collision. 
			foreach (Control i in this.Controls)
			{
				foreach (Control j in this.Controls)
				{
					if (i is PictureBox && i.Tag == "alien")
					{
						if (j is PictureBox && j.Tag == "bullet")
						{
							if (i.Bounds.IntersectsWith(j.Bounds))
							{
								score++;
								this.Controls.Remove(i);
								this.Controls.Remove(j);
							}
						}
					}
				}
			}

			//Keeping and displaying the score 
			label1.Text = "Score : " + score;
			if (score > totalEnemies - 1)
			{
				gameOver();
				MessageBox.Show("First level complete, select OK to start the next level ");
				this.Hide();
				var newForm = new Level2();
				newForm.Show();
			}
		}

		//Start of the makebullet function 
		private void makeBullet()
		{
			//This creates a picture box which will act as a the bullet. 
			PictureBox bullet = new PictureBox();
			//This assigns the image for the bullet to the picture box. 
			bullet.Image = Properties.Resources.bullet;
			//Adjusts the size of the bullet. 
			bullet.Size = new Size(5, 20);
			//The bullet's tag. 
			bullet.Tag = "bullet";
			//Calculating the exact location of where the bullet should appear. 
			bullet.Left = player.Left + player.Width / 2;
			//Calculating the exact location of where the bullet should appear. 
			bullet.Top = player.Top - 20;
			/*Adds picture box to form meaning it causes the bullet to appear  

            in the level.*/
			this.Controls.Add(bullet);
			/*Makes the bullet image the top layer preventing it from being  

             * overlaid by the other images.*/
			bullet.BringToFront();
		}

		//This function stops the timer, ending the game. 
		private void gameOver()
		{
			timer1.Stop();
			this.Hide();
			label1.Text += " Game Over";
		}

		private void Level1_Load(object sender, EventArgs e)
		{
		}
	}
}
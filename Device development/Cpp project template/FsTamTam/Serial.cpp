/*

    ------------------------------------------
    FsTamTam
    
    (c) Iacopo Baroncini. All rights reserved.
    ------------------------------------------
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
    1)  Redistributions of source code must retain the above copyright notice, this list
        of conditions and the following disclaimer.

    2)  Redistributions in binary form must reproduce the above copyright notice, this
        list of conditions and the following disclaimer in the documentation and/or other
        materials provided with the distribution.

    3)  Neither the name of Iacopo Baroncini nor the names of its contributors may be
        used to endorse or promote products derived from this software without specific
        prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
    IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
    NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
    OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
    WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
    OF SUCH DAMAGE.
    
*/


#include <iostream>
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <sys/ioctl.h>
#include <netdb.h>
#include <thread>
#include <chrono>
#include "Serial.h"


static bool connected = false;
static int socketId = -1;
static struct sockaddr_in server;


bool Serial::begin(const char *addr, int port) {
    if (socketId != -1) ::close(socketId);
    connected = false;
    while (true) {
        socketId = socket(AF_INET , SOCK_STREAM , 0);
        if (socketId == -1) return false;
        if(inet_addr(addr) == -1) {
            struct hostent *he;
            struct in_addr **addr_list;
            if (!(he = gethostbyname(addr))) return false;
            addr_list = (struct in_addr **) he->h_addr_list;
            for(int i = 0; addr_list[i] != NULL; i++) {
                server.sin_addr = *addr_list[i];
                break;
            }
        } else
            server.sin_addr.s_addr = inet_addr(addr);
        server.sin_family = AF_INET;
        server.sin_port = htons(port);
        if (connect(socketId, (struct sockaddr *) &server, sizeof(server)) >= 0) break;
        ::close(socketId);
        std::this_thread::sleep_for (std::chrono::milliseconds(1000));
    }
    return connected = true;
}


void Serial::close() {
    ::close(socketId);
    connected = false;
    socketId = -1;
}


bool Serial::isConnected() {
    return connected;
}


bool Serial::available() {
    if (!connected) return false;
    int count;
    ioctl(socketId, FIONREAD, &count);
    return count > 0;
}


char Serial::read() {
    if (!connected) return 0;
    char ch;
    if (recv(socketId, &ch, 1, 0) < 0) {
        ::close(socketId);
        connected = false;
        return 0;
    }
    return ch;
}

void Serial::print(char ch) {
    if (!connected) return;
    if (send(socketId, &ch, 1, 0) < 0) {
        ::close(socketId);
        connected = false;
    }
}


void Serial::print(const char *text) {
    if (!connected) return;
    if (send(socketId, text, strlen(text), 0) < 0) {
        ::close(socketId);
        connected = false;
    }
}


void Serial::print(int i) {
    if (!connected) return;
    char buf[10];
    sprintf(buf, "%d", i);
    if (send(socketId, buf, strlen(buf), 0) < 0) {
        ::close(socketId);
        connected = false;
    }
}


void Serial::print(double d) {
    if (!connected) return;
    char buf[30];
    sprintf(buf, "%f", d);
    if (send(socketId, buf, strlen(buf), 0) < 0) {
        ::close(socketId);
        connected = false;
    }
}


void Serial::println() {
    if (!connected) return;
    char ch = '\n';
    if (send(socketId, &ch, 1, 0) < 0) {
        ::close(socketId);
        connected = false;
    }
}

void Serial::flush() {
}


